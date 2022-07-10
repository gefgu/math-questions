const Answers = ({ answers }) => {
  return (
    <div className="answers">
      {answers.map((answer, index) => {
        answer = `${answer}`;
        answer = answer.replace(".", ",");
        try {
          const trailingZeros = answer.match(/,[1-9]*(0+$)/)[1];
          answer = answer.replace(trailingZeros, "");
        } catch (e) {}
        return (
          <>
            <p className="answer" key={answer}>
              {answer}
            </p>
            {index === 0 && <p className="answer letter">OU</p>}
          </>
        );
      })}
    </div>
  );
};

export default Answers;
