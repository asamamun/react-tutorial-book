import * as React from 'react';
import './App.css';
import RenderQuestions from './RenderQuestions';
import axios from 'axios';

const API_ENDPOINT = 'http://192.168.54.78/r49/laravel/projects/TigerQuiz/public/api/';
// const API_ENDPOINT = 'http://localhost/r49/laravel/projects/TigerQuiz/public/api/questions';


const App = () => {
  // const [name, setName] = React.useState("test");
  // const [age, setAge] = React.useState("12");
  const headers = { 
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
};
let obj = {
  question:"",
  op1:"",
  op2:"",
  op3:"",
  op4:"",
  ans:""
};
  const [inputs, setInputs] = React.useState(obj);
  const [q,setq] = React.useState([]);
  const [message,setMessage] = React.useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name + ":"+ value);
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post(`${API_ENDPOINT}addquestion`, inputs, { headers })
        .then(response => {
          console.log(response.data.message);
          setInputs(obj);
          setMessage(response.data.message);
          loadData();
        });
  }
  const loadData = async () => {
    await axios.get(`${API_ENDPOINT}questions`)
  .then((response) => response.data)
  .then((result) => {
    console.log(result);
    setq(result);
  });
}
//run only once bcs the second argument is an empty array
// If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.
 React.useEffect(() => {
 
   //do the other work

/*         await axios.get('json1.json')
    .then(res=>{
     //console.log(res.data) 
     setq(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');      
    })  */
       
/*     fetch(`${API_ENDPOINT}questions`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setq(result);
      }); */
  
    // then call it here
    loadData();
   // console.log(q);
  }, []);

  return (
    <div className='container'>
      <h1 id='questionslist'>Questions</h1>
      <form action={API_ENDPOINT+'answers'} method="post">
      <RenderQuestions questions={q} title='randomquestion'/>
      <input type='submit' className='btn btn-primary' value='Submit' name='submit'/>
      </form>
      <hr/>
      <form onSubmit={handleSubmit}>
      <label>Enter your Question:
        <input type="text" 
        name='question'
        value={inputs.question}
        className='form-control'
        onChange={handleChange}
        />
      </label>
      <br/>
      <label>OPTION 1:
        <input type="text" 
        name='op1'
        value={inputs.op1}
        className='form-control'
        onChange={handleChange}
        />
      </label><br/>
      <label>OPTION 2:
        <input type="text" 
        name='op2'
        value={inputs.op2}
        className='form-control'
        onChange={handleChange}
        />
      </label><br/>
      <label>OPTION 3:
        <input type="text" 
        name='op3'
        value={inputs.op3}
        className='form-control'
        onChange={handleChange}
        />
      </label><br/>
      <label>OPTION 4:
        <input type="text" 
        name='op4'
        className='form-control'
        value={inputs.op4}
        onChange={handleChange}
        />
      </label><br/>
      <label>Answer:
        <input type="text" 
        name='ans'
        className='form-control'
        value={inputs.ans}
        onChange={handleChange}
        />
      </label><br/>

      

      <input type="submit" className='btn btn-primary' />
     
    </form>
    <h1>{message}</h1>
    </div>
  );
};


export default App;
