import {shallow} from '@vue/test-utils'
import Setup from '../src/components/Setup.vue'
import {describe} from "mocha";

const wrapper = shallow(Setup);

describe('Setup.vue', () => {
    it('Checking H1', function () {
        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Client Setup')
    });
});
