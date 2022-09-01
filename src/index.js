import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Idbbisew from './Idbbisew'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Idbbisew />
    <hr/><br/>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
/*
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
*/
// ReactDOM.render(<App/>,document.getElementById('root'));
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* function x(){ console.log("hi");}
x(); */
const x = () => {
  console.log("arrow function working");
} 
x();
const AplusBSq = (a,b) => {
  return a*a + 2*a*b+b*b;
}
/* const sq = (a) => {
  return a*a;
} */
/* const sq = a => {
  return a*a;
} */
const sq = a => a*a; 
console.log(AplusBSq(5,6));
console.log(sq(5));


