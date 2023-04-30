import React, { useState } from 'react';
import Collection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
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
fetch(`/db.json/${id}`, {
method: 'DELETE',
})
.then(response => {
if (response.ok) {
setArmy(army.filter(b => b.id !== id)); // remove bot with specified id from army state directly
}
})
.catch(error => console.error(error));
};

return (
<div>
<YourBotArmy army={army} releaseBot={handleBotRelease} dischargeBot={handleBotDischarge} setArmy={setArmy} />

<Collection onBotEnlisted={handleBotEnlisted} onBotRelease={handleBotRelease} />
</div>
);
};

export default App;