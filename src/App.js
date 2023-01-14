import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import data from "./Data";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState({
    id: 0,
    content: "Get a random advice",
  });

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) =>
        setAdvice((prev) => ({
          ...prev,
          id: data.slip.id,
          content: data.slip.advice,
        }))
      );
  }
  setTimeout(getAdvice, 5000);
  return (
    <div className="App">
      <Header />
      <Main advice={advice} onClick={getAdvice} />
      <Footer />
    </div>
  );
}

export default App;
