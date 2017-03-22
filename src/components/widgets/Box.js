import React, { PropTypes } from 'react';

import Icon from 'components/uiElements/Icon';

var _collapsable, _collapsed, _removable;

const Box = ({children, collapsable, collapsed, color = 'default', isLoading, removable, solidColor}) => {
  _collapsable = collapsable;
  _collapsed = collapsed;
  _removable = removable;
  return (
    <div className={`box box-${color} ${solidColor ? "box-solid" : ""} ${_collapsed ? "collapsed-box" : ""}`}>
      { children }
      { isLoading && (<div className="overlay"><Icon name="refresh" modifier="fa-spin"/></div>) }
    </div>
  );
}
Box.propTypes = {
  color: PropTypes.string, // default, primary, warning, danger
  collapsable: PropTypes.bool,
  collapsed: PropTypes.bool,
  isLoading: PropTypes.bool,
  removable: PropTypes.bool,
  solidColor: PropTypes.bool
}

const BoxHeader = ({children, bordered = true}) => {
  return (
    <div className={`box-header ${bordered ? "with-border" : ""}`}>
      <h3 className="box-title">
        { children }
      </h3>
      <div className="box-tools pull-right">
        {
          _removable ? (
            <button type="button" className="btn btn-box-tool" data-widget="remove"><Icon name="times" /></button>
          ) : (
            _collapsable && (
              <button type="button" className="btn btn-box-tool" data-widget="collapse">
                <Icon name={(_collapsed ? "plus" : "minus")}/>
              </button>
            )
          )
        }
      </div>
    </div>
  );
}
BoxHeader.propTypes = { bordered: PropTypes.bool };

const BoxBody = ({children}) => <div className="box-body">{ children }</div>;
const BoxFooter = ({children}) => <div className="box-footer">{ children }</div>;

export default Box;
export { BoxHeader, BoxBody, BoxFooter };