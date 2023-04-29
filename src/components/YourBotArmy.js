
import React from 'react';
import '../App.css';


const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  // Return null if the army prop is not defined
  if (!army) return null;

  // Create a function to handle bot discharge
  const handleDischarge = (id) => {
    // Send a DELETE request to the API endpoint with the specified bot ID
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        // If the request is successful, call the dischargeBot function with the bot ID and show an alert message
        if (response.ok) {
          dischargeBot(id);
          alert(`Bot ${id} has been discharged forever!`);
        }
      })
      .catch(error => console.error(error));
  };
  
  
  return (
    <div className='your-bot-army'>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="card">
          <img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">Health: {bot.health}</p>
            <p className="card-text">Damage: {bot.damage}</p>
            <p className="card-text">Armor: {bot.armor}</p>
            <p className="card-text">Class: {bot.bot_class}</p>
            <p className="card-text">Catchphrase: {bot.catchphrase}</p>
            <button onClick={() => releaseBot(bot)}>Remove</button>
   
            <button className="discharge-btn" onClick={() => handleDischarge(bot.id)}>X</button>

           

          </div>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;