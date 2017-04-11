import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    /**
     * Current progress value
     */
    valueNow: PropTypes.number,

    /**
     * Minium possible value
     */
    valueMin: PropTypes.number,

    /**
     * Maximum possible value
     */
    valueMax: PropTypes.number,

    /**
     * Sets the bar color
     */
    color: PropTypes.oneOf(['primary', 'info', 'danger', 'warning', 'success']),

    /**
     * Sets the active animation (Only works with striped class)
     */
    active: PropTypes.bool,

    /**
     * Sets the bar size (the biggest is default)
     */
    size: PropTypes.oneOf(['sm', 'xs', 'xxs']),

    /**
     * Shows the percentage label inside the bar (only works on the normal size)
     */
    showProgressLabel: PropTypes.bool
}

const defaultProps = {
    color: 'primary',
    valueNow: 0,
    valueMin: 0,
    valueMax: 100
}

const ProgressBar = ({
    valueNow,
    valueMin,
    valueMax,
    color,
    size,
    active,
    striped,
    showProgressLabel,
    children
}) => {
    return (
        <div className={
            classNames(
                'progress',
                {[`progress-${size}`]: size},
                {'active': active}
             )
        }>
            <div className={
                classNames(
                    'progress-bar', 
                    `progress-bar-${color}`, 
                    {'progress-bar-striped': striped || active}
                )
            } 
            role="progressbar" aria-valuenow={valueNow} aria-valuemin={valueMin}
            aria-valuemax={valueMax} style={{width: `${valueNow}%`}}
            >
                { 
                    !size && (
                        showProgressLabel ? (
                            <span>{ `${valueNow} %` }</span>
                        ) : (
                            <span>{ children }</span>
                        )
                    )
                }
            </div>
        </div>
    )
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;