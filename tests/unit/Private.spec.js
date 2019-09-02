import {createLocalVue, mount, shallowMount} from '@vue/test-utils'
import BootstrapVue from "bootstrap-vue";
import Private from "@/components/Private";
import VueRouter from 'vue-router'
import autofocus from "vue-autofocus-directive"

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueRouter)
localVue.use(autofocus)

const router = new VueRouter()
const wrapper = mount(Private, { localVue, router });

describe('Index.vue', () => {
    it('Checking H1', function () {
        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Scan private Key')
    });
});
