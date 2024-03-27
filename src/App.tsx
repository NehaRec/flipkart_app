import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import { Counter } from './pages/Counter';
// import { Counter } from './store/slice/Counter';
// import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Footer/> */}
      <Counter/>
    </div>
  );
}

export default App;
