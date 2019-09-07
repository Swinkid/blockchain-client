<template>
    <div>
        <h1 class="text-center">Candidates</h1>
        <p class="text-center">Select the candidate you wish to vote for.</p>
        <b-alert v-model="error.visible" variant="danger" dismissible>
            {{error.message}}
        </b-alert>
        <b-row>
            <b-col class="col col-6" v-for="(candidate, index) in candidates"  style="margin-bottom: 1em">
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
                                <b-button @click="castVote(candidate.key)" id="submit" variant="primary">Cast Vote</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import BlockchainService from '@/services/BlockchainService';
    import KeyService from "@/services/KeyService";

    export default {
        name: "Candidates",
        mounted (){
            this.candidates = BlockchainService.getCandidates();
        },
        data () {
            return {
                error: {
                    message: "",
                    visible: false
                },
                candidates: []
            }
        },
        methods: {

			/**
             * Handle 'cast vote' button
			 * @param key Users Key
			 */
			castVote(key){
            	BlockchainService.castVote(key, KeyService.getPrivateKey()).then((result) => {
					if(result){
						this.$router.push({
							path: 'completed'
						});
					} else {
						this.error.visible = true;
						this.error.message = "Your key was invalid or has already been used."
					}
                })
            }
        }
    }
</script>

<style scoped>

</style>
