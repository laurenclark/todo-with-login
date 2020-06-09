import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <Router>
                <App />
            </Router>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
