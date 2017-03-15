import React, { Component, PropTypes } from 'react';

import Icon from 'components/popular/Icon';

var collapsable, collapsed, removable;

export default class Box extends Component {
  PropTypes = {
    color: PropTypes.string, // default, primary, warning, danger
    collapsed: PropTypes.bool,
    isLoading: PropTypes.bool,
    removable: PropTypes.bool,
    solidColor: PropTypes.bool
  }

  render() {
    collapsable = this.props.collapsable;
    collapsed = this.props.collapsed;
    removable = this.props.removable;
    
    let { 
      color = 'default', 
      isLoading,
      solidColor
    } = this.props;

    return (
      <div className={"box box-" + color + (solidColor ? " box-solid" : "") + (collapsed ? " collapsed-box" : "")}>
        { this.props.children }
        { isLoading && (<div className="overlay"><Icon name="refresh" spin={true}/></div>) }
      </div>
    );
  }
}

export class BoxHeader extends Component {
  PropTypes = {
    border: PropTypes.bool,
    collapsable: PropTypes.bool,
    collapsed: PropTypes.bool
  }

  render() {
    let { border = true } = this.props;

    return (
      <div className={"box-header" + (border ? " with-border" : "")}>
        <h3 className="box-title">
          { this.props.children }
        </h3>
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
    );
  }
}

export class BoxBody extends Component {
  render() {
    return (
      <div className="box-body">
        { this.props.children }
      </div>
    );
  }
}

export class BoxFooter extends Component {
  render() {
    return (
      <div className="box-footer">
        { this.props.children }
      </div>
    );
  }
}