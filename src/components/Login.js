/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../Context';
import Button from './UI/Button';

function Login() {
    const [text, setText] = useState('');
    const { setUsername } = useContext(Context);
    const history = useHistory();

    function handleChange(e) {
        setText(e.target.value);
    }

    function login() {
        if (text) {
            setUsername(text);
            history.push('/todos');
        }
    }

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
                onSubmit={(e) => e.preventDefault()}
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
                    value={text}
                    name="text"
                    onChange={handleChange}
                    required
                />
                <Button
                    handler={login}
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
