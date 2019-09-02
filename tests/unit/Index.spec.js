import {createLocalVue, mount, shallowMount} from '@vue/test-utils'
import BootstrapVue from "bootstrap-vue";
import Index from "@/components/Index";
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueRouter)

const router = new VueRouter()
const wrapper = mount(Index, { localVue, router });

describe('Index.vue', () => {
    it('Checking H1', function () {
        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Blockchain Voting')
    });
});
