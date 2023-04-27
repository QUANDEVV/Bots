import React, { useState, useEffect } from "react";
import Collection from "./components/Collection";
import Army from "./components/Army";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data.bots));
  }, []);

  const enlistBot = (botToEnlist) => {
    if (!enlistedBots.includes(botToEnlist)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
    }
  };

  const releaseBot = (id) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setBots(bots.filter((bot) => bot.id !== id));
        setEnlistedBots(enlistedBots.filter((bot) => bot.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>


      <Army bots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <Collection bots={bots} enlistBot={enlistBot} />
     
    </div>
  );
}

export default App;