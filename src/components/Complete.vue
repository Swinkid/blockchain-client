<template>
    <div>
        <h1>Vote Submitted</h1>
        <p>Vote submitted. You'll be automatically logged out.</p>
        <p>Click <a href="/">here</a> if you're not automatically redirected.</p>
    </div>
</template>

<script>
    export default {
        name: "Complete",
        mounted() {
			return {

			}
		},
		data () {
			return {
        		canRedirect: false,
                redirectTime: 3000
            }
        },
        created() {
        	setTimeout(() => {
				this.$router.push({
					path: '/'
				});
            }, this.redirectTime);
		}
	}
</script>

<style scoped>

</style>
