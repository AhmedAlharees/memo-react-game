const Card = ({ character, onHandleClickedCard, onClickToShuffle }) => {
  return (
    <li
      onClick={() => {
        onHandleClickedCard(character.id);
        onClickToShuffle();
      }}
      className="bg-blue-900 mx-w-[400px] h-[300px] cursor-pointer rounded-lg shadow-md hover:shadow-blue-100 hover:shadow-lg transition duration-300 overflow-hidden "
    >
      <div className="rounded-t-lg">
        <img
          src={character.src}
          alt={`image for ${character.name}`}
          className="h-[200px] w-[100%]"
        />
      </div>
      <h3 className="text-white font-roboto text-2xl translate-y-8">
        {character.name}
      </h3>
    </li>
  );
};

export default Card;
