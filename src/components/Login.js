/** @jsx jsx */
import React, { useContext } from 'react';
import Button from './UI/Button';
import { Context } from '../Context';
import { jsx, css } from '@emotion/core';

function Login() {
    const { username, setUsername } = useContext(Context);
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 90vh;
                padding: 1rem;
            `}>
            <form
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border: 2px solid grey;
                    background: var(--secondary);
                    margin: 0 auto;
                    min-height: 350px;
                    max-width: 460px;
                    width: 100%;
                    text-align: center;
                    align-items: center;
                    padding: 2rem;
                `}>
                <img
                    src="https://icon.now.sh/account_circle/99/9fadbb"
                    alt=""
                />
                <input
                    css={css`
                        margin-top: 2rem;
                    `}
                    placeholder="Username"
                    type="text"
                    required
                />
                <Button
                    uniqueStyle={{ marginTop: '2rem', padding: '20px 30px' }}
                    bgColor="var(--accent)"
                    size="large">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
