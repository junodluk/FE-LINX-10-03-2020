import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { checkProps, findByTestAttr } from '../../test/test-utils';

describe('Input', () => {
    const defaultProps = {
        id: 'test-input',
        value: '__value',
        disabled: false
    };
    const setup = (props = {}) => {
        const mergedProps = { ...defaultProps, ...props };
        return shallow(<Input {...mergedProps} />);
    };

    test('render without throwing an error', () => {
        const wrapper = setup();
    });

    test('does not throw warning with expected props', () => {
        checkProps(Input, defaultProps);
    });

    test('change input value, and call change event', () => {
        let changed = false;
        let initialValue = 'input__value';
        const onChange = value => {
            changed = initialValue !== value;
        };
        const wrapper = setup({ value: initialValue, change: onChange });
        const componentNode = findByTestAttr(wrapper, 'input-control');
        expect(componentNode.length).toBe(1);
        componentNode.at(0).simulate('change', { target: { value: 'hello' } });
        expect(changed).toBe(true);
    });

    test('call focus event', () => {
        const wrapper = setup();
        let componentNode;
        wrapper.setProps({ disabled: true });
        componentNode = findByTestAttr(wrapper, 'input-control');
        expect(componentNode.at(0).prop('disabled')).toBe(true);

        wrapper.setProps({ disabled: false });
        componentNode = findByTestAttr(wrapper, 'input-control');
        expect(componentNode.at(0).prop('disabled')).toBe(false);
    });
});
