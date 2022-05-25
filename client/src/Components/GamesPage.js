import React from 'react';
import { useEffect, useState } from "react";
import Search from "./Search";
import GameCard from "./GameCard";
import GamesList from "./GamesList";


function GamesPage({renderGames, setGamesData, gamesData, addListItem}) {
    const [games, setGames] = useState([]);
    const [query, setQuery] = useState("");
  
    // useEffect(() => {
    //   fetch(`/games`)
    //     .then((r) => r.json())
    //     .then(setGames);
    // }, []);

    const filterGames = gamesData.filter((game) => {
      return game.title.toLowerCase().includes(query.toLowerCase()) || game.genre.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <section className="container">
      <Search setQuery={setQuery}/>
      <GamesList games={filterGames} renderGames={renderGames} setGamesData={setGamesData} addListItem={addListItem} />
      </section>
    );
  }
  
  export default GamesPage;
