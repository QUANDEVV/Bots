import React from 'react';

const Army = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Army;