<template>
    <div>
        <h1>Stats</h1>
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
</script>

<style scoped>

</style>
