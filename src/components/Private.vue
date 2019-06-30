<template>

    <div>

        <h1>Scan private Key</h1>
        <p>Before we begin, please scan your private key.</p>

        <b-form @submit="onSubmit">
            <b-form-group id="public-key-group" label-for="public-key" class="public-form">
                <b-form-input v-autofocus
                              id="public-key"
                              v-model="form.private"
                              required
                ></b-form-input>
            </b-form-group>
        </b-form>


    </div>
</template>

<script>
    export default {
        name: "Private",
        data () {
            return {
                form: {
                    private: '',
                }
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                //TODO: Validate PrivateKey
                this.$router.push({
                    path: 'candidates'
                });
            }
        }
    }
</script>

<style scoped>
    /*.public-form {
      clip-path: inset(100%);
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }*/
</style>
