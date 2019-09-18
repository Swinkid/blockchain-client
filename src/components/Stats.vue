<template>
    <div>
        <h1>Stats</h1>
        <p>Node Count: {{ nodes.length }}</p>
        <p>Block Count: {{ chain.length }}</p>
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
        mounted () {
            this.fetchStats();
        },
        methods: {
            fetchStats(){
                this.nodes = this.fetchNodes();
                this.chain = this.fetchChain();
            },
            fetchNodes(){
                BlockchainService.getNodes().then((result) => {
                    if(result){
                        return result;
                    } else {
                        return [];
                    }
                });
            },
            fetchChain(){
                BlockchainService.getChain().then((result) => {
                    if(result){
                        return result;
                    } else {
                        return [];
                    }
                })
            },
            fetchTransactionPool(){
                //TODO
            },
            analyzeChain(chain){
                let candidates = BlockchainService.getCandidates();


                //TODO
            }
        }
    }
</script>

<style scoped>

</style>
