import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Private from "@/components/Private";
import Public from "@/components/Public";
import Candidates from "@/components/Candidates";
import Complete from "@/components/Complete";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Public
        },
        {
            path: '/private',
            name: 'Private',
            component: Private
        },
        {
            path: '/candidates',
            name: 'Candidates',
            component: Candidates
        },
        {
            path: '/completed',
            name: 'Completed',
            component: Complete
        }
    ],
    //TODO: Authentication Guard to redirect if step not complete
    mode: 'history'
})
