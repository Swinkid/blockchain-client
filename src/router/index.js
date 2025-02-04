import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Private from "@/components/Private";
import Candidates from "@/components/Candidates";
import Complete from "@/components/Complete";
import KeyService from "@/services/KeyService";
import BlockchainService from "@/services/BlockchainService";
import VoteService from "@/services/VoteService";
import Setup from "@/components/Setup";
import NotStarted from "@/components/NotStarted";
import Stats from "../components/Stats";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            beforeEnter: (to, from, next) => {
                isClientSetup(to, from, next);
                isDuringSession(to, from, next);
            }
        },
        {
            path: '/setup',
            name: 'Setup',
            component: Setup
        },
        {
            path: '/private',
            name: 'Private',
            component: Private,
            beforeEnter: (to, from, next) => {
                isClientSetup(to, from, next);
                isDuringSession(to, from, next);
            }
        },
        {
            path: '/candidates',
            name: 'Candidates',
            component: Candidates,
            beforeEnter: (to, from, next) => {
                isKeySaved(to, from, next);
                isClientSetup(to, from, next);
                isDuringSession(to, from, next);
            }
        },
        {
            path: '/completed',
            name: 'Completed',
            component: Complete,
            beforeEnter: (to, from, next) => {
                isDuringSession(to, from, next);
            }
        },
        {
            path: '/notstarted',
            name: 'Not Started',
            component: NotStarted
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats
        }

    ],
    //TODO: Authentication Guard to redirect if step not complete
    mode: 'history'
});

function isKeySaved(to, from, next) {
    if(KeyService.isPrivateKeySet()){
        next();
    } else {
        next({
            path: '/'
        });
    }
}

function isClientSetup(to, from, next) {
    if(!BlockchainService.isNodeSet() && !BlockchainService.countCandidates() > 0){
        next({
            path: '/setup'
        });
    } else {
        next();
    }
}

function isDuringSession(to, from, next) {
   if(VoteService.isDuringSession()){
       next();
   } else {
       next({
           path: '/notstarted'
       });
   }
}
