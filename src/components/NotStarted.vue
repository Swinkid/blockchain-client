<template>
    <div>
        <h1>Vote Not Started</h1>
        <p>Vote session not started. Please wait.</p>
    </div>
</template>

<script>
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
				console.log('tick')
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
		}
	}
</script>

<style scoped>

</style>
