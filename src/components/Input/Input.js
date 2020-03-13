import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.styled.js';
import { testAttr } from '../../test/test-utils.js';

class Input extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    changeHandler = e => {
        const { value } = e.target;
        if (this.props.change) this.props.change(value);
    };

    setValue = value => {
        this.setState({ value });
    };

    focus = () => {
        this.input.current.focus();
    };

    focusHandler = () => {
        if (this.props.focus) this.props.focus();
    };

    blurHandler = () => {
        if (this.props.blur) this.props.blur();
    };

    render() {
        const {
            id,
            value,
            icon,
            placeholder,
            className,
            disabled
        } = this.props;

        return (
            <StyledInput className={className}>
                <input
                    id={id}
                    type="text"
                    autoComplete="off"
                    {...testAttr('input-control')}
                    value={value}
                    ref={this.input}
                    onChange={this.changeHandler}
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    disabled={disabled}
                    required
                />
                {placeholder && <label htmlFor={id}>{placeholder}</label>}
                {icon &&
                    React.cloneElement(
                        icon,
                        { className: `icon ${icon.props.className}` },
                        null
                    )}
            </StyledInput>
        );
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    icon: PropTypes.element,
    change: PropTypes.func,
    focus: PropTypes.func,
    blur: PropTypes.func
};

Input.defaultProps = {
    value: '',
    placeholder: '',
    disabled: false
};

export default Input;
