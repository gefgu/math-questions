const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, index) => {
        const letters = ["a", "b", "c", "d", "e"];
        return (
          <p className="answer" key={answer}>
            <span className="letter">{letters[index]})</span> {answer}
          </p>
        );
      })}
    </div>
  );
};

export default Answers;
