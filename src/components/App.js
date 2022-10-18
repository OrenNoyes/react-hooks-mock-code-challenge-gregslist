import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((Response) => Response.json())
    .then((data) => {
      setCards(data)
    })
  }, [])
  return (
    <div className="app">
      <Header />
      <ListingsContainer cards = {cards}/>
    </div>
  );
}

export default App;