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
                BlockchainService.getNodes().then((result) => {
                    if(result){
                        this.nodes = result;
                    } else {
                        this.nodes = [];
                    }
                });

                BlockchainService.getChain().then((result) => {
                    if(result){
                        this.chain = result;
                    } else {
                        this.chain = [];
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
