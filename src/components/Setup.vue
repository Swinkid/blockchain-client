<template>
    <div>

        <h1>Client Setup</h1>

        <b-alert v-model="error.show" variant="danger">{{ error.message }}</b-alert>

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

            <h3>Vote Settings</h3>
            <b-form-group>
                <h4>Start Date / Time</h4>
                <div class="row">
                    <div class="col col-6">
                        <b-form-input :value="form.startDate" v-model="form.startDate" name="start-date" type="date"></b-form-input>
                    </div>
                    <div class="col col-6">
                        <b-form-input :value="form.startTime" v-model="form.startTime" name="start-time" type="time"></b-form-input>
                    </div>
                </div>

                <h4>End Date / Time</h4>
                <div class="row">
                    <div class="col col-6">
                        <b-form-input :value="form.endDate" v-model="form.endDate" name="end-date" type="date"></b-form-input>
                    </div>
                    <div class="col col-6">
                        <b-form-input :value="form.endTime" v-model="form.endTime" name="end-time" type="time"></b-form-input>
                    </div>
                </div>

            </b-form-group>
            <h3>Candidate Settings</h3>
            <b-form-group v-for="(line, index) in lines" v-bind:key="index">

                <div class="row">
                    <div class="col col-3">
                        <b-form-input placeholder="Candidate Name" v-model="lines[index].name" :value="lines[index].name || ''"></b-form-input>
                    </div>
                    <div class="col col-3">
                        <b-form-input placeholder="Party" v-model="lines[index].party" :value="lines[index].party || ''"></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-form-input placeholder="Photo URL" v-model="lines[index].photo" :value="lines[index].photo || ''"></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-form-input placeholder="Public Key" v-model="lines[index].key" :value="lines[index].name || ''"></b-form-input>
                    </div>
                    <div class="col col-2">
                        <b-button class="add" @click="addRow">Add</b-button>
                        <b-button class="del" @click="removeRow(index)">Remove</b-button>
                    </div>
                </div>

            </b-form-group>

            <b-button type="submit" class="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import BlockchainService from "@/services/BlockchainService";
    import VoteService from "@/services/VoteService";

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
                    startDate: null,
                    startTime: null,
                    endDate: null,
                    endTime: null
                },

                error: {
                	show: false,
                    message: ''
                }
            }
        },
        mounted(){
            this.form.nodeUrl = BlockchainService.getNode();

            this.form.startDate = VoteService.getStartDateString();
            this.form.startTime = VoteService.getStartTimeString();
            this.form.endDate = VoteService.getEndDateString();
            this.form.endTime = VoteService.getEndTimeString();

            if(!BlockchainService.getCandidates().length <= 0){
                this.lines = BlockchainService.getCandidates();
            }

        },
        methods: {
			/**
             * Handle setup submit
			 * @param e
			 */
			onSubmit(e){
                e.preventDefault();

                BlockchainService.setCandidates(this.lines);
                BlockchainService.setNode(this.form.nodeUrl);


                let startDate = VoteService.parseDate(this.form.startDate, this.form.startTime);
                let endDate = VoteService.parseDate(this.form.endDate, this.form.endTime);

                if(startDate.getTime() < endDate.getTime()){
					VoteService.setStart(this.form.startDate, this.form.startTime);
					VoteService.setEnd(this.form.endDate, this.form.endTime);

					this.$router.push({
						path: '/'
					});
                } else {
                	this.error.show = true;
                	this.error.message = "Your dates are invalid. Please correct them."
                }
            },
			/**
             * Add row to candidate list
			 */
			addRow(){
				this.lines.push({
                    id: 0
                })
            },

			/**
             * Remove row from candidate list
			 * @param index
			 */
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
