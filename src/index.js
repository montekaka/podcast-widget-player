import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import {setNavigator} from '../src/libs'
import './index.css';
import App from './App';
import { Provider as JotaiProvider} from 'jotai'
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} ref={() => {setNavigator(history)} }>
      <JotaiProvider>
        <Suspense fallback={<h2>Loading...</h2>}>
        <App />
        </Suspense>
      </JotaiProvider>
    </Router>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
