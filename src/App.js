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
    const [searchTerm, setSearchTerm] = useState('Re');
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      };
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
      const searchedStories = list.filter(function (l) {
        return l.title.toLowerCase().includes(searchTerm.toLowerCase());
        // return l.title.includes(searchTerm);
        });

return (
  <div> 
<Search search={searchTerm} onSearch={handleSearch} title="search title" />
{searchTerm}
<hr/>
{}
{/* <List listitems={(searchTerm=='item')?itemlist:list} /> */}
<List listitems={searchedStories} />
<Counter/> 
</div>
 );
  }

/* function App() {
  
} */
const Search = ({ search, onSearch }) => {
  // const { search, onSearch } = props;
  return (
    <div>
    <label htmlFor="search">Search 11: </label>
    <input      
    id="search" 
    type="text"
    value={search} 
    onChange={onSearch} />
    </div>
  );
}

/* function Search() {
  
} */
const Myitem = ({  
  title,
  url,
  author,
  num_comments,
  points,
  }) =>
(
  <li>
<span>
<a href={url}>{title}</a>
</span> 
<span>{author}</span>
<span>{num_comments}</span>
<span>{points}</span>
</li>
);

const List = ({listitems}) =>{
  return (
    <ul>      
    {
      listitems.map(({objectID,...i}) => {
      return <Myitem key={objectID} {...i} />
      } )
    }
    </ul>
    );
}

export default App;