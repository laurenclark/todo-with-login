/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { PropTypes } from 'prop-types';

function Button({ children, bgColor, fgColor, size, hollow }) {
    const ButtonStyle = css({
        borderRadius: '4px',
        background: `${hollow ? 'none' : bgColor}`,
        border: `${hollow ? '2px solid' : 'none'}`,
        borderColor: `${hollow ? bgColor : 'transparent'}`,
        color: `${hollow ? bgColor : fgColor}`,
        padding: `${size === 'large' ? '1rem' : '0.6rem'}`,
        fontSize: `${size === 'large' ? '1.4rem' : '1rem'}`,
        cursor: 'pointer'
    });

    return <button css={ButtonStyle}>{children}</button>;
}

Button.defaultProps = {
    bgColor: 'grey',
    fgColor: '#FFFFFF',
    hollow: false
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    hollow: PropTypes.bool,
    size: PropTypes.string
};

export default Button;
