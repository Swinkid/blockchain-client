<template>
    <div>
        <h1>Candidates</h1>

        <b-row>
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Candidate A">
                                <b-card-text>
                                    Some Fake Party
                                </b-card-text>
                                <b-button href="#" variant="primary">Cast Vote</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Candidate B">
                                <b-card-text>
                                    Some Fake Party
                                </b-card-text>
                                <b-button href="#" variant="primary">Cast Vote</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/1000/1000/?image=20" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Candidate C">
                                <b-card-text>
                                    Some Fake Party
                                </b-card-text>
                                <b-button href="#" variant="primary">Cast Vote</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card></b-col>
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
