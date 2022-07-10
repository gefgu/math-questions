const Answers = ({ answers }) => {
  answers = answers.map((answer, index) => {
    answer = `${answer}`;
    answer = answer.replace(".", ",");
    try {
      const trailingZeros = answer.match(/,[1-9]*(0+$)/)[1];
      answer = answer.replace(trailingZeros, "");
    } catch (e) {}
    return answer;
  });

  return (
    <div className="answers">
      <p className="answer">{answers[0]}</p>
      <p className="answer letter">OU</p>
      <p className="answer">{answers[1]}</p>
    </div>
  );
};

export default Answers;
