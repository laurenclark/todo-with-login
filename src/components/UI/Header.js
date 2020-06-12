/** @jsx jsx */
import { useContext } from 'react';
import Button from './Button';
import { jsx, css } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

function Header({ username }) {
    const history = useHistory();
    const { setUsername } = useContext(Context);
    const headerStyle = css({
        background: 'whitesmoke',
        borderBottom: '2px solid #ededed',
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

    function logout() {
        setUsername('');
        history.push('/');
    }

    return (
        <header css={headerStyle}>
            <div css={divStyle}>
                <img
                    src="https://icon.now.sh/account_circle/48/9fadbb"
                    alt=""
                />
                <p>
                    Logged in as <strong>{username}</strong>
                </p>
                <Button handler={logout}>Logout</Button>
            </div>
        </header>
    );
}

export default Header;
