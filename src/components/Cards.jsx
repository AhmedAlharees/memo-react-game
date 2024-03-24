import Card from './Card';
import useShuffle from '../hooks/useShuffle';



const Cards = ({ onHandleClickedCard }) => {
  const [characters, setCharacters] = useShuffle([]);

  return (
    <ul className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 transition duration-300 gap-4">
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onHandleClickedCard={onHandleClickedCard}
          onClickToShuffle={setCharacters}
        />
      ))}
    </ul>
  );
};

export default Cards;
