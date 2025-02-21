import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import DecorativeBottom from "./components/DecorativeBottom/DecorativeBottom";

function App() {
  return (
    <>
      <DecorativeBottom />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
