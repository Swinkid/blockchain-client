<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group id="public-key-group" label-for="node-url" class="url-form">
                <b-form-input
                    id="node-url"
                    v-model="form.nodeUrl"
                    required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import BlockchainService from "@/services/BlockchainService";

    export default {
        name: "Setup",
        data () {
            return {
                form: {
                    nodeUrl: '',
                }
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();



                console.log('test');
                BlockchainService.setNode(this.form.nodeUrl);
                console.log(BlockchainService.getNode());
                console.log(BlockchainService.isNodeSet())
            }
        }
    }
</script>

<style scoped>

</style>
