<template>
    <div>
        <h1>Stats</h1>
        <p>Nodes Online: {{ nodes.length }}</p>
        <p>Block Count: {{ chain.length }}</p>
        <p>Unspent Votes: </p>
    </div>
</template>

<script>
    import BlockchainService from "../services/BlockchainService";

    export default {
        name: "Stats",
        data() {
            return {
                chain: [],
                nodes: []
            }
        },
        created () {
            this.fetchChain().then(() => {
				this.fetchNodes().then(() => {
					this.analyzeChain(this.chain);
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
                let candidates = BlockchainService.getCandidates();

                candidates.forEach((candidate) => {
                	candidate.votes = 0;
                });

                chain.forEach((block) => {
                	block._data.forEach((transaction) => {

                		candidates.forEach((candidate) => {

                            if(candidate.key === transaction.receiver){
                            	candidate.votes += 1;
                            }

                        })
                    });
                });

                console.log(candidates);
            }
        }
    }
</script>

<style scoped>

</style>
