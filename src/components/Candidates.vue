<template>
    <div>
        <h1 class="text-center">Candidates</h1>
        <p class="text-center">Select the candidate you wish to vote for.</p>

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
                                <b-button @click="castVote(candidate.key)" variant="primary">Cast Vote</b-button>
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

    export default {
        name: "Candidates",
        mounted (){
            this.candidates = BlockchainService.getCandidates();
        },
        data () {
            return {
                candidates: []
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
