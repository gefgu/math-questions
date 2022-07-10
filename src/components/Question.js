const Question = ({ expression }) => {
  return (
    <div className="question">
      <h1>Desafio Matemático:</h1>
      <h2 className="expression">{expression}</h2>
      <hr className="bar" />
    </div>
  );
};

export default Question;
