import React, { Component, PropTypes } from 'react';
import Icon from 'components/uiElements/icon';

class Input extends Component {
  constructor(props){
    super(props);

    this.state = { value: this.props.defaultValue || "" };
  }

  handleChange = e => this.setState({ value: e.target.value }, this.props.onChange(e))

  renderInput = () => {
    let {defaultValue = "", disabled, iconLeft, iconRight, modifier, placeholder = "", readOnly, type = 'button', onChange} = this.props;
    return <input type={type} disabled={disabled} readOnly={readOnly} 
            placeholder={placeholder} value={this.state.value} 
            onChange={this.handleChange} className={`form-control ${modifier}`} />;
  }

  render() {
    return (
      //{ iconLeft && (<span><Icon name={iconLeft} />&nbsp;</span>) }
      this.renderInput()
      //{ iconRight && (<span>&nbsp;<Icon name={iconRight} /></span>) }
    );
  }

}
Input.propTypes = {
	defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  modifier: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
}

export default Input;