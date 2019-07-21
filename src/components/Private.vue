<template>

    <div>

        <h1>Scan private Key</h1>
        <p>Using the provided scanner, scan the QR code given to you on arrival.</p>
        <b-alert v-model="error.visible" variant="danger" dismissible>
           {{error.message}}
        </b-alert>
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

    import KeyService from '@/services/KeyService';

    export default {
        name: "Private",
        data () {
            return {
                error: {
                    message: "",
                    visible: false
                },
                form: {
                    private: '',
                }
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                if(KeyService.isKeyValid(this.form.private)){
                    this.$router.push({
                        path: 'candidates'
                    });
                } else {
                    this.error.visible = true;
                    this.error.message = "Your key was invalid or has already been used."
                }
            }
        }
    }
</script>

<style scoped>
    .public-form {
      clip-path: inset(100%);
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
</style>
