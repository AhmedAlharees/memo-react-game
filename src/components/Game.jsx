import { useState, useEffect } from 'react';
import Cards from './Cards';
import ScoreBoard from './ScoreBoard';
import Modal from './Modal';

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [highestScore, setHigestScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClickedCard = (CARD_ID) => {
    if (!selectedCards.includes(CARD_ID)) {
      setSelectedCards(() => [...selectedCards, CARD_ID]);
      setCurrentScore((score) => score + 1);
    } else {
      handleSetScore(currentScore);
      setShowModal(() => true);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('score')) {
      localStorage.setItem('score', 0);
    } else {
      const storedScoreValue = localStorage.getItem('score');
      setHigestScore(() => storedScoreValue);
    }
  }, []);

  useEffect(() => {
    if (currentScore === 10) {
      setShowModal(() => true);
    }
  }, [currentScore]);

  const handleSetScore = (newScore) => {
    if (newScore > highestScore) {
      setHigestScore(() => newScore);
      localStorage.setItem('score', newScore);
    }
  };

  const handleCloseModal = () => {
    setSelectedCards(() => []);
    setCurrentScore(() => 0);
    setShowModal(() => false);
  };

  return (
    <>
      <ScoreBoard currentScore={currentScore} highestScore={highestScore} />
      <Cards onHandleClickedCard={handleClickedCard} />
      {showModal && (
        <Modal score={currentScore} onHandleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default Game;
