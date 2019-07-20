import Vue from 'vue'
import App from './App'
import router from './router'
import autofocus from "vue-autofocus-directive"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false;
Vue.directive("autofocus", autofocus);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});


