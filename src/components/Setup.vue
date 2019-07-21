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
                    <div class="col col-3">
                        <b-form-input placeholder="Candidate Name" v-model="lines[index].name" :value="lines[index].name || ''" required></b-form-input>
                    </div>
                    <div class="col col-3">
                        <b-form-input placeholder="Party" v-model="lines[index].party" :value="lines[index].party || ''" required></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-form-input placeholder="Photo URL" v-model="lines[index].photo" :value="lines[index].photo || ''" required></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-form-input placeholder="Public Key" v-model="lines[index].key" :value="lines[index].name || ''" required></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-button @click="addRow">Add</b-button>
                        <b-button @click="removeRow(index)">Remove</b-button>
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
                    party: '',
                    key: '',
                    photo: ''
                }],

                form: {
                    nodeUrl: '',
                }
            }
        },
        mounted(){
            this.form.nodeUrl = BlockchainService.getNode();

            if(!BlockchainService.getCandidates().length <= 0){
                this.lines = BlockchainService.getCandidates();
            }

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
