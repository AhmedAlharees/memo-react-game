
const Start = ({ onSetStart }) => {
  return (
    <>
      <section className="container  m-10 text-white flex flex-col items-center p-5">
        <h2 className="font-ruslan text-3xl">How to Play ?</h2>
        <p className="font-roboto text-xl text-center container max-w-md">
          Press start to reveal ten cards. Click each card once to increase your
          score. Beware: cards shuffle after each click. Clicking the same card
          twice ends the game. Challenge your memory and aim for a high score!
        </p>
        <button
          onClick={() => onSetStart((currStart) => !currStart)}
          className="p-5 bg-white text-black m-5 text-xl font-ruslan border rounded-xl animate-pulse hover:animate-none"
        >
          Start
        </button>
      </section>
    </>
  );
};

export default Start;
