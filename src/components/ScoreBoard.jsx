const ScoreBoard = ({ highestScore, currentScore }) => {
  return (
    <div className="p-5 flex justify-between gap-5 text-white font-roboto">
      <div className="bg-blue-500 border rounded-lg p-2 ">
        <p>Highest Score: {highestScore ? highestScore : '?'}</p>
      </div>
      <div className="bg-green-400 rounded-lg p-2">
        <p>Score: {currentScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
