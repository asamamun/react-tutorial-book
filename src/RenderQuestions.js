import Question from "./Question";
const RenderQuestions  = ({questions}) =>{
    return (
      <div className="bg-info">      
        {questions.map((question) => (
          <Question key={question.id} q={question}/>
      ))}
      </div>
    );
  };
  export default RenderQuestions;