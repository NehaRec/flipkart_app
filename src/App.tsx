import React from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { LoginPage, SignupPage } from "./pages";
// import { LoginPage } from './pages/login';
// import { Counter } from './pages/Counter';
// import { SignupPage } from './pages';
// import SignupPage from './pages/signup/SignupPage';

// import { Counter } from './store/slice/Counter';
// import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />

        {/* <LoginPage /> */}
        <SignupPage />
        <Header />
      </div>

      {/* <Counter/>  */}
    </div>
  );
}

export default App;
