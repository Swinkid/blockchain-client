<template>
    <b-container v-bind:style="{ fontSize: typeSize + 'rem' }">
        <b-navbar toggleable="lg" type="light">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-button v-on:click="typeSize = typeSize + typeIncrement" right>
                    Font +
                </b-button>

                <b-button v-on:click="typeSize = typeSize - typeIncrement" right>
                    Font -
                </b-button>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>

        <router-view/>
    </b-container>
</template>

<script>
    export default {
        name: 'App',
		mounted() {
			return {

			}
		},
		data () {
			return {
                typeSize: 1,
                typeIncrement: 0.1
			}
		}
    }
</script>

<style>
    .btn {
        margin-right: 0.2rem;
    }
</style>
