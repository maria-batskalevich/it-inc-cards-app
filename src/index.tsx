import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {App} from "./00-App/App";
import {Provider} from "react-redux";
import {store} from "./00-App/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
console.log(process.env)
console.log(process.env.REACT_APP_BACK_URL)
reportWebVitals();
