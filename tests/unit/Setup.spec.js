import {createLocalVue, shallowMount} from '@vue/test-utils'
import BootstrapVue from "bootstrap-vue";
import Setup from "@/components/Setup";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const wrapper = shallowMount(Setup, { localVue });

describe('Setup.vue', () => {
    it('Checking H1', function () {
        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Client Setup')
    });
});
