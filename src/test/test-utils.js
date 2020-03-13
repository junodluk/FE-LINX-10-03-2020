import checkPropTypes from 'check-prop-types';

export const testAttr = val => {
    return process.env.NODE_ENV === 'production' ? {} : { 'data-test': val };
};

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(
        // eslint-disable-next-line
        component.propTypes,
        expectedProps,
        'prop',
        component.name
    ); 
    expect(propError).toBeUndefined(propError);
};
