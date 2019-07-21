<template>
    <div>

        <h1>Client Setup</h1>

        <h3>Node Connection</h3>
        <b-form @submit="onSubmit">
            <b-form-group id="public-key-group">
                <b-form-input
                    id="node-url"
                    v-model="form.nodeUrl"
                    placeholder="Node URL"
                    :value="form.nodeUrl"
                    required
                ></b-form-input>
            </b-form-group>


            <h3>Candidate Settings</h3>
            <b-form-group v-for="(line, index) in lines" v-bind:key="index">

                <div class="row">
                    <div class="col col-5">
                        <b-form-input placeholder="Candidate Name" v-model="lines[index].name" :value="lines[index].name || ''" required></b-form-input>
                    </div>
                    <div class="col col-5">
                        <b-form-input placeholder="Candidate Public Key" v-model="lines[index].key" :value="lines[index].name || ''" required></b-form-input>
                    </div>
                    <div class="col col-1">
                        <b-button @click="addRow">+</b-button>
                    </div>
                    <div class="col col-1">
                        <b-button @click="removeRow(index)">-</b-button>
                    </div>
                </div>

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
                lines: [{
                    name: '',
                    key: ''
                }],

                form: {
                    nodeUrl: '',
                }
            }
        },
        mounted(){
            this.form.nodeUrl = BlockchainService.getNode();
            this.lines = BlockchainService.getCandidates();
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                BlockchainService.setCandidates(this.lines);
                BlockchainService.setNode(this.form.nodeUrl);

                this.$router.push({
                    path: '/'
                });
            },
            addRow(){
                this.lines.push({
                    id: 0
                })
            },
            removeRow(index){
                if(this.lines.length > 1){
                    this.lines.splice(index, 1);
                }
            }
        }
    }
</script>

<style scoped>

</style>
