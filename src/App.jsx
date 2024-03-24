import { useState } from 'react';
import Header from './components/Header';
import Start from './components/Start';
import Game from './components/Game';

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <Header />
      <main className="grid place-items-center text-center mt-10">
        {!start && <Start onSetStart={setStart} />}
        {start && <Game start={start} />}
      </main>
    </>
  );
}

export default App;
