import {React, useState} from "react";
// import * as React from "react";
// import { ReactDOM } from "react-dom";
import "./App.css";
import Developer from "./Developer";


//counter component
const Counter = () => {
  //you can only se value of co using function chan
  const [co, chan] = useState(10);
  const increse = (n) => chan(++n)
  const decrese = (n) => chan(--n)
  // function decrese(){ chan(--co);}
  
  return(
    <fieldset>
      <legend>Counter</legend>
      <button onClick={() => chan(co + 1)}>
       +
      </button>
      <button onClick={() => chan(co - 1)}>
        -
      </button>
      <button onClick={() => increse(co)}>increse</button>
      <button onClick={() => decrese(co)}>decrese</button>

      <br></br>
      <h1>{co}</h1>
    </fieldset>
  )
}
  const App = () =>{
    const list = [
      {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
      },
      {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
      },
      ];
    const topic = "React";
// you can do something in between
const d = new Developer("IDB","BISEW");
function sq(n){return n*n;}
const w = {
  greeting: 'welcome to react 2',
  title: d.getName(),
};

function getTitle(){
  return w.title;
}

let x = 5;

return (
  <div> 
<h1>{getTitle()}</h1>
<h1>{w.title}</h1>
<p> {w.greeting}</p>
<h3>{sq(x)}</h3>
<Search formvalue={topic} aa="bb" />
<hr/>
<List listitems={list} />
{/*   <ul>
  {
    list.map(function(o,i){
      return <li key={i}>
        index : {i} <br/>
        Title : {o.title} <br />
        Url : {o.url} <br/>
        Author : {o.author} <br/>
        Number Of Comments : {o.num_comments} <br/>
        points : {o.points} <br/>          
        </li>
        
    })
  }
</ul> */}
<Counter/> 
</div>
 );
  }

/* function App() {
  
} */
const Search = (props) => {
  const [searchTerm, setsearchTerm] = useState('yourrr search item');
 
  const handleChange = (event) =>{
    //searchTerm = event.target.value;
    //console.log(event.target.value);
    setsearchTerm(event.target.value);
    
  }
  return (
    <div>
      {props.aa}
    <label htmlFor="search" className="bg-red">Search: </label>
    <input id="search"  type="text" onChange={handleChange} />
    {/* <input id="search" value={props.formvalue} type="text" onChange={handleChange} /> */}
    <hr></hr>
    <p>
Searching for <strong>{searchTerm}</strong>.
</p>
    </div>
  );
}

/* function Search() {
  
} */
const Myitem = (props) =>
(
  <li>
<span>
<a href={props.item.url}>{props.item.title}</a>
</span>
<span>{props.item.author}</span>
<span>{props.item.num_comments}</span>
<span>{props.item.points}</span>
</li>
);
const List = (props) =>{
  return (
    <ul>      
    {
      props.listitems.map((i) => {
      return <Myitem key={i.objectID} item={i} />
      } )
    }
    </ul>
    );
}

export default App;