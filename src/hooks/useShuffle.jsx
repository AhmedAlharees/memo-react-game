import { useState } from 'react';
import characters from '../components/characters';

// Fisher-Yates shuffle algorithm
const shuffleArray = (arrryToShuffle) => {
  const SHUFFLED_ARRAY = [...arrryToShuffle];

  for (let i = SHUFFLED_ARRAY.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [SHUFFLED_ARRAY[randomIndex], SHUFFLED_ARRAY[i]] = [
      SHUFFLED_ARRAY[i],
      SHUFFLED_ARRAY[randomIndex],
    ];
  }

  return SHUFFLED_ARRAY;
};

const useShuffle = () => {
  const [shuffeldArray, setShuffledArray] = useState(shuffleArray(characters));

  const handleClickToShuffle = () => {
    setShuffledArray(() => shuffleArray(characters));
  };

  return [shuffeldArray, handleClickToShuffle];
};

export default useShuffle;
