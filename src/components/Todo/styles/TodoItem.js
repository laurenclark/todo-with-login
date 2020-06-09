import { css } from '@emotion/core';

const TodoItemStyle = css`
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 1fr 8fr 4fr 1fr;
    border-bottom: 2px solid lightgrey;
    padding: 2rem 1rem;
    align-items: center;
    p {
        font-size: 1.2rem;
    }
    .date {
        text-align: center;
        font-size: 1.3rem;
        color: grey;
    }
`;

export default TodoItemStyle;
