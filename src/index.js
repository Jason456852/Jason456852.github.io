import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import Root from './components/root.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Root />
        </HashRouter>
    </React.StrictMode>
);

