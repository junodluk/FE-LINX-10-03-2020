import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import StyledAutocompleteOptions from './AutocompleteOptions.styled';
import { CancelIcon } from '../../assets/icons';

export class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '', showOptions: false };

        this.textInput = React.createRef();
    }

    static getDerivedStateFromProps(props) {
        if (props.value) return { inputValue: '' };
        return null;
    }

    onClearHandler = () => {
        this.setState({ inputValue: '', showOptions: false }, () => {
            this.textInput.current.focus();
            if (this.props.change) this.props.change(null);
        });
    };

    onSelectHandler = item => {
        this.setState({
            showOptions: false
        });
        if (this.props.change) this.props.change(item);
        if (this.props.filter) this.props.filter('');
    };

    inputChangeHandler = inputValue => {
        if (this.props.filter) this.props.filter(inputValue);
        this.setState({ inputValue });
    };

    focusHandler = () => {
        if (this.props.focus) this.props.focus();
        this.setState({ showOptions: true });
    };

    blurHandler = () => {
        if (this.props.blur) this.props.blur();
        setTimeout(() => {
            this.setState({ showOptions: false });
        }, 150);
    };

    componentDidMount() {
        this.clearButton = (
            <CancelIcon
                className="clickable-icon"
                width="35px"
                onClick={this.onClearHandler}
            />
        );
    }

    render() {
        const { id, placeholder, icon, className, value, options } = this.props;
        const { inputValue, showOptions } = this.state;

        return (
            <React.Fragment>
                <Input
                    {...{
                        id,
                        placeholder,
                        className
                    }}
                    icon={value ? this.clearButton : icon}
                    ref={this.textInput}
                    value={(value && value.label) || inputValue}
                    change={this.inputChangeHandler}
                    focus={this.focusHandler}
                    blur={this.blurHandler}
                    disabled={!!value}
                />

                <StyledAutocompleteOptions
                    optionsCount={options.length}
                    className={
                        showOptions && options && options.length ? 'show' : null
                    }
                >
                    {showOptions &&
                        options &&
                        options.length > 0 &&
                        options.map(item => {
                            return (
                                <li
                                    key={item.geoDbId}
                                    onClick={() => this.onSelectHandler(item)}
                                >
                                    {item.label}
                                </li>
                            );
                        })}
                </StyledAutocompleteOptions>
            </React.Fragment>
        );
    }
}

Autocomplete.propTypes = {
    value: PropTypes.object,
    filter: PropTypes.func,
    change: PropTypes.func,
    options: PropTypes.array
};

export default Autocomplete;
