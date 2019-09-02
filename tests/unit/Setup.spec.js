import {createLocalVue, mount, shallowMount} from '@vue/test-utils'
import BootstrapVue from "bootstrap-vue";
import Setup from "@/components/Setup";
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueRouter)

const router = new VueRouter()
const wrapper = mount(Setup, { localVue, router });

describe('Setup.vue', () => {
    it('Checking H1', function () {
        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Client Setup')
    });

    it('Checking H3 1', () => {
        let h3 = wrapper.find('h3');
        expect(h3.text()).toBe('Node Connection');
    })

    it('Check Singular Row', () => {
        let row = wrapper.findAll('div .row');
        expect(row.wrappers.length).toBe(1);
    })

    it('Check Add and Remove Row', () => {

        let addButton = wrapper.find('button.add');
        addButton.trigger('click');

        let delButton = wrapper.find('button.del');
        delButton.trigger('click');

        let row = wrapper.findAll('div .row');

        expect(row.wrappers.length).toBe(1);
    })

    it('Check submit', () =>{
       let submitButton = wrapper.find('button.submit');
       submitButton.trigger('submit');

    });

});
