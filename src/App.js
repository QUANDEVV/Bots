import React, { useState } from 'react';
import Collection from './components/BotCollection';
import Army from './components/YourBotArmy';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);

  const handleBotEnlisted = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleBotRelease = (id) => {
    setArmy(army.filter(b => b.id !== id));
  };

  const handleBotDischarge = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          handleBotRelease(id);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Army army={army} releaseBot={handleBotRelease} dischargeBot={handleBotDischarge} />
      <Collection onBotEnlisted={handleBotEnlisted} onBotRelease={handleBotRelease} />
    </div>
  );
};

export default App;
