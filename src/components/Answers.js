const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, index) => {
        const letters = ["a", "b", "c", "d", "e"];
        answer = `${answer}`;
        answer = answer.replace(".", ",");
        try {
          const trailingZeros = answer.match(/,[1-9]*(0+$)/)[1];
          answer = answer.replace(trailingZeros, "");
        } catch (e) {}
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
