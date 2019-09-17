<template>
    <div>
        <h1>Vote Not Started</h1>
        <p>Vote session not started. Please wait.</p>
    </div>
</template>

<script>
    import VoteService from "@/services/VoteService";

	export default {
		name: "NotStarted",
        data(){
			return{
				timer: '',
                interval: 1000
            }
        },
        created() {
			this.timer = setInterval(this.invokeTimer, this.interval);
        },
        methods: {
			invokeTimer: function() {
				if(VoteService.isDuringSession()){
					this.$router.push({
						path: '/'
					});
                }
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
		}
	}
</script>

<style scoped>

</style>
