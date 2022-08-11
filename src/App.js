// import {React} from "react";
import * as React from "react";
// import { ReactDOM } from "react-dom";
import "./App.css";
import Developer from "./Developer";
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

  const App = () =>{
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
<Search/>
<hr/>
<List />
<List />
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
</div>
 );
  }

/* function App() {
  
} */
const Search = () => {
  const handleChange = (event) =>{
    console.log(event);
  }
  return (
    <div>
    <label htmlFor="search" className="bg-red">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

/* function Search() {
  
} */

const List = () =>{
  return (
    <ul>
    {
      list.map((item) => {
return(<li key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
  </li>)
        

      } )
/*     list.map(function (item) {
    return (
    <li key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    </li>
    );
    }) */
    }
    </ul>
    );
}

/* function List() {

  } */




export default App;