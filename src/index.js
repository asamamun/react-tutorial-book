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


// Object Destructuring
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const obj = { a:5,b:6,c: 10, d: 2 };
const { c, d } = obj;
console.log(c + " : " + d);
/* const user = {
  firstName: 'Robin',
  lastName: 'Wieruch',
  };
  const {firstName} = user;
  console.log(firstName); */

  //nested destructuring
  const user1 = {
    firstName: 'Robin',
    pet: {
    name: 'Trixi',

    },
    };
/*     const {firstName,pet} = user1;
    console.log(pet.name); */
    const {firstName,pet:{name}} = user1;
    console.log(name);

    //spread and rest operator
    function sum(x, y, z) {
      return x + y + z;
    }
    const numbers = [1, 2, 3];
    // const numbers2 = [10, 20, 30, numbers];
    const numbers2 = [10, 20, 30, ...numbers];
    console.log(numbers2);

    console.log(numbers);
    console.log(sum(...numbers));

    const profile = {
      firstName: 'Robin',
      lastName: 'Wieruch',
      };
      const address = {
      country: 'Germany',
      city: 'Berlin',
      };
      const user = {
      ...profile,
      gender: 'male',
      ...address,
      };
      console.log(user);


      //rest operator
      function rsum(...theArgs) {
        // console.log(theArgs);
         let total = 0;
        for (const arg of theArgs) {
          total += arg;
        }
        return total; 
      }
      
      console.log(rsum(1, 2, 3,22,33,44,11,0));
      // expected output: 6
      
      console.log(rsum(1, 2, 3, 4));
      // expected output: 10

      const user2 = {
        id: '1',
        firstName: 'Robin',
        lastName: 'Wieruch',
        country: 'Germany',
        city: 'Berlin',
        };
        const { id, ...userWithoutAddress } = user2;
        console.log(userWithoutAddress);