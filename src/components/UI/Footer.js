/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const style = css({
    textAlign: 'center',
    display: 'block',
    padding: '40px'
});

function Footer() {
    return (
        <footer>
            <span css={style}>
                Made with ❤ by&nbsp;
                <a href="https://github.com/laurenclark">laurenclark</a>
            </span>
        </footer>
    );
}

export default Footer;
