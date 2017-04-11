import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import { Icon } from '../index';

const propTypes = {
  bordered: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'success', 'primary', 'warning', 'danger']),
  collapsable: PropTypes.bool,
  collapsed: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  isLoading: PropTypes.bool,
  removable: PropTypes.bool,
  solidColor: PropTypes.bool
}

const defaultProps = {
  bordered: true,
  color: 'default',
  collapsable: false,
  collapsed: false,
  isLoading: false,
  removable: false,
  solidColor: false
}

class Box extends Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  renderHeader() {
    const { bordered, collapsable, collapsed, header, removable } = this.props;
    return (
      <div className={classNames('box-header', {'with-border': bordered})}>
        {
          React.isValidElement(header) ? (
            header
          ) : (
            <h3 className="box-title">{header}</h3>
          )
        }
        <div className="box-tools pull-right">
          {
            removable ? (
              <button type="button" className="btn btn-box-tool" data-widget="remove"><Icon name="times" /></button>
            ) : (
              collapsable && (
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <Icon name={(collapsed ? "plus" : "minus")}/>
                </button>
              )
            )
          }
        </div>
      </div>
    )
  }

  renderFooter() {
    const { footer } = this.props;
    return footer && <div className="box-footer">{ footer }</div>;
  }

  render() {
    const {
      children, 
      collapsable, 
      collapsed, 
      color, 
      footer,
      header,
      isLoading, 
      removable, 
      solidColor
    } = this.props;
    return (
      <div className={classNames('box', `box-${color}`, {'box-solid': solidColor}, {'collapsed-box': collapsed})}>
        { header && this.renderHeader() }
        <div className="box-body">
          { children }
        </div>
        { footer && this.renderFooter() }
        { isLoading && (<div className="overlay"><Icon name="refresh" cssModifier="fa-spin"/></div>) }
      </div>
    );
  }
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;