import {React, useState, useEffect, useRef} from "react";
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
    // const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');
    const useSemiPersistentState = (key, initialState) => {
      const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
      );
      useEffect(() => {
      localStorage.setItem(key, value);
      }, [value, key]);
      return [value, setValue];
      };
    const [searchTerm, setSearchTerm] = useSemiPersistentState('search','React');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      //localStorage.setItem('search', event.target.value);
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

        const [stories, setStories] = useState(list);
        const handleRemoveStory = (item) => {
          const newStories = stories.filter(
          (story) => item.objectID !== story.objectID
          );
          setStories(newStories);
          
          }; 
          

return (
  <div> 
{/* <Search search={searchTerm} onSearch={handleSearch} /> */}
<InputWithLabel
id="search"
value={searchTerm}

onInputChange={handleSearch}
><strong>Search:</strong> </InputWithLabel>
<InputWithLabel
id="name"
isFocused
value={searchTerm}
onInputChange={handleSearch}
><strong>Name:</strong> </InputWithLabel>
<h3>Searching {searchTerm}</h3>
<hr/>
{}
<List listitems={searchedStories} onRemoveItem={handleRemoveStory} />
<Counter/> 
</div>

 );
  }



  const InputWithLabel = ({ id, value, type = 'text', isFocused, onInputChange , children }) =>{ 
    // A
const inputRef = useRef();
// console.log(inputRef.current);
// C
useEffect(() => {
if (isFocused && inputRef.current) {
  // console.log(inputRef.current);
  
// D
inputRef.current.focus();
}
}, [isFocused]);
    return (
      <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      {/* B */}
      <input
      ref={inputRef}
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
      />
      </>
)
    };
/* function App() {
  
} */
/* const Search = ({ search, onSearch }) => {
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
} */
/* const Search = ({ search, onSearch }) => [
  <label key="1" htmlFor="search">
  Search:{' '}
  </label>,
  <input
  key="2"
  id="search"
  type="text"
  value={search}
  onChange={onSearch}
  />,
  ]; */
/*   const Search = ({ search, onSearch }) => (
    <>
    <label htmlFor="search">Search: </label>
    <input
    id="search"
    type="text"
    value={search}
    onChange={onSearch}
    />
    </>
    ); */

const List = ({listitems, onRemoveItem}) =>{
  return (
    <ul>      
    {
      listitems.map((i) => {
      return <Myitem key={i.objectID} item={i}
      onRemoveItem={onRemoveItem} />
      } )
    }
    </ul>
    );
}

const Myitem = ({  
item,
  onRemoveItem
  }) =>
  {
    const handleRemoveItem = () => {
      onRemoveItem(item);
      };
return (
  <li>
<span>
<a href={item.url}>{item.title}</a>
</span> 
<span>{item.author}</span>
<span>{item.num_comments}</span>
<span>{item.points}</span>
<span>
<button type="button" onClick={handleRemoveItem}>
Dismiss
</button>
</span>
</li>
)};



export default App;