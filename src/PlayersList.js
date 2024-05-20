import React from 'react';
import Player from './Player';
import { players } from './players';




const PlayersList = () => {
    return (
      <div className="players-list">
        {players.map((player) => (
          <Player key={player.name} player ={player} />
        ))}
      </div>
    );
  };
  
  export default PlayersList;