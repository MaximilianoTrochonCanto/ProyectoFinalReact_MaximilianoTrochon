import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAXXRILb3nQPn5qX3m1-Ce5daCkUJkvHyk",
authDomain: "finalreact-maximilianotrochon.firebaseapp.com",
projectId: "finalreact-maximilianotrochon",
storageBucket: "finalreact-maximilianotrochon.appspot.com",
messagingSenderId: "742065397373",
appId: "1:742065397373:web:491713df9769793e65db14"
};

  initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
