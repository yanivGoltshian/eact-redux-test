import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SortableComponent from "./components/App";
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <SortableComponent />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
