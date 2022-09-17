import './Question.css';
const Question  = ({q}) =>{
    return (
      <div> 
        <h3>{q.question}</h3>     
        <ul className="list-group singlequestion">
        <li className="list-group-item"><input type="radio" name={q.id} value='op1' id={'op1-'+q.id} /> <label htmlFor={'op1-'+q.id}>{q.op1}</label> </li>
        <li className="list-group-item"><input type="radio" name={q.id} value='op2' id={'op2-'+q.id} /> <label htmlFor={'op2-'+q.id}>{q.op2}</label> </li>
        <li className="list-group-item"><input type="radio" name={q.id} value='op3' id={'op3-'+q.id} /> <label htmlFor={'op3-'+q.id}>{q.op3}</label> </li>
        <li className="list-group-item"><input type="radio" name={q.id} value='op4' id={'op4-'+q.id} /> <label htmlFor={'op4-'+q.id}>{q.op4}</label> </li>
        </ul>
      </div>
    );
  };
  export default Question;