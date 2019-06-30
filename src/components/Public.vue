<template>
    <div>

        <h1>Scan Public Key</h1>
        <p>Before we begin, please scan your public key.</p>

        <b-form @submit="onSubmit">
            <b-form-group id="public-key-group" label-for="public-key" class="public-form">
                <b-form-input v-autofocus
                              id="public-key"
                              v-model="form.public"
                              required
                ></b-form-input>
            </b-form-group>
        </b-form>


    </div>
</template>

<script>
    import Vue from 'vue'
    import KeyService from '@/services/KeyService'

    export default {
        name: 'Public',
        data () {
            return {
                form: {
                    public: '',
                }
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                this.$router.push({
                    path: 'private'
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
