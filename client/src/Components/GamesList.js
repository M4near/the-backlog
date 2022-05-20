import React from "react";
import GameCard from "./GameCard";
import Game from "./Game";

function GamesList({ games}) {
    const renderGames = concerts.map((game)=>(
      <GameCard key={game.id} id={game.id} band_name={game.band_name} name={game.name} image={game.image} date={game.date} time={game.time} genre={game.genre}/>
      ));
    return (
      <ul className='cards'>
      {renderGames}
      </ul>
    );
  }
  
  export default GameList;
