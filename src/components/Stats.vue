<template>
    <div>
        <div v-if="!ready" class="text-center">
            <b-row>
                <b-col><b-spinner label="Spinning"></b-spinner></b-col>
            </b-row>
            <b-row>
                <b-col><strong>Loading...</strong></b-col>
            </b-row>
        </div>

        <div v-else>
            <h1>Stats</h1>
            <p>Nodes Online: {{ nodes.length }}</p>
            <p>Block Count: {{ chain.length }}</p>

            <h2>Results</h2>
            <b-row>
                <b-col class="col col-6" v-for="(candidate, index) in candidates"  v-model="candidates" style="margin-bottom: 1em">
                    <b-card no-body>
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img :src="candidate.photo" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body :title="candidate.name">
                                    <b-card-text>
                                        {{ candidate.party }}
                                    </b-card-text>
                                    <b-card-text>
                                        <strong>Total Votes: </strong>{{ candidate.votes }}
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import BlockchainService from "../services/BlockchainService";

    export default {
        name: "Stats",
        data() {
            return {
                chain: [],
                nodes: [],
                candidates: [],
                ready: false,
            }
        },
        created () {
			this.candidates = BlockchainService.getCandidates();

			this.candidates.forEach((candidate) => {
				candidate.votes = 0;
			});

            this.fetchChain().then(() => {
				this.fetchNodes().then(() => {
					this.analyzeChain(this.chain).then((result, error) => {
						this.ready = true;
                    });
                });
            });
        },
        methods: {
            fetchNodes(){
                return new Promise((resolve, reject) => {
					BlockchainService.getNodes().then((result) => {
						if(result){
							this.nodes = result.data;
							resolve(true);
						} else {
							this.nodes = [];
							resolve(false);
						}
					});
                });
            },
            fetchChain(){
            	return new Promise((resolve, reject) => {
					BlockchainService.getChain().then((result) => {
						if(result){
							this.chain =  result.data;
							resolve(true);
						} else {
							this.nodes = [];
							resolve(false)
						}
					});
                });
            },
            analyzeChain(chain){
                return new Promise((resolve, reject) => {

					chain.forEach((block) => {
						block._data.forEach((transaction) => {

							this.candidates.forEach((candidate) => {

								if(candidate.key === transaction.receiver){
									candidate.votes += 1;
								}

							})
						});
					});

					resolve(true);
                })
            }
        }
    }
</script>

<style scoped>

</style>
