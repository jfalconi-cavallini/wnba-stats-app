import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [selectedStat, setSelectedStat] = useState('');

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleStatChange = (event) => {
    setSelectedStat(event.target.value);
  };

  const getStats = async () => {
    // Define the URL for the stats data.
    const url = `https://www.basketball-reference.com/wnba/players/`;

    // Fetch the data.
    const response = await fetch(url);
    const data = await response.json();

    // Log the data.
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WNBA Stats</h1>
        <div>
          <label htmlFor="playerNameInput">Enter Player Name:</label>
          <input
            id="playerNameInput"
            type="text"
            value={playerName}
            onChange={handlePlayerNameChange}
          />
        </div>
        <div>
          <label htmlFor="statSelect">Select Stat:</label>
          <select id="statSelect" value={selectedStat} onChange={handleStatChange}>
            <option value="">-- Select Stat --</option>
            <option value="points">Points</option>
            <option value="rebounds">Rebounds</option>
            <option value="assists">Assists</option>
            {/* Add more stat options as needed */}
          </select>
        </div>
        <div>
          <button onClick={getStats}>Get Stats!!!</button>
        </div>
        {playerName && selectedStat && (
          <p>
            Player: {playerName} | Stat: {selectedStat}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
