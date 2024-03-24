import ReactDOM from 'react-dom';

const Modal = ({ score, onHandleCloseModal }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 text-center w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <section className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">
          You&apos;ve {score >= 10 ? 'Won!' : 'Lost!'}
        </h2>
        <p className="mb-4">Your Score is {score}</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 animate-bounce"
            onClick={() => onHandleCloseModal()}
          >
            Play Again
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => window.close()}
          >
            Quit Game
          </button>
        </div>
      </section>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
