/** @jsx jsx */
import React from 'react';
import Button from './Button';
import { jsx, css } from '@emotion/core';

function Header() {
    const headerStyle = css({
        display: 'flex',
        flexFlow: 'row-reverse',
        padding: '5px 20px'
    });

    const divStyle = css({
        display: 'flex',
        alignItems: 'center',
        '& p': {
            margin: '0 10px'
        }
    });

    return (
        <header css={headerStyle}>
            <div css={divStyle}>
                <img
                    src="https://icon.now.sh/account_circle/48/9fadbb"
                    alt=""
                />
                <p>
                    Logged in as <strong>John Doe</strong>
                </p>
                <Button>Logout</Button>
            </div>
        </header>
    );
}

export default Header;
