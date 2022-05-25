import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import GamesPage from "./GamesPage";

function GamesList({ games, setGamesData, addListItem}) {
    const renderGames = games.map((game)=>(
      <GameCard key={game.id} id={game.id} title={game.title} genre={game.genre} image={game.image} summary={game.summary} on_PC={game.on_PC} on_Xbox={game.on_Xbox}  on_Playstation={game.on_Playstation} on_Switch={game.on_Switch} setGamesData={setGamesData} addListItem={addListItem}/>
      ));

    return (
      <ul className='cards'>
      {renderGames}
      </ul>
    );
  }
  
  export default GamesList;
