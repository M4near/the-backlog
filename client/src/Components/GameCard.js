import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GamesList from "./GamesList"


function GameCard({key, id, title, genre, image, summary, on_PC, on_Xbox, on_Playstation, on_Switch}) {
  const [showAll, setShowAll] = useState(false)

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  const onPC = on_PC == true ? "Yes" : "No" 
  const onXbox = on_Xbox == true ? "Yes" : "No" 
  const onPS = on_Playstation == true ? "Yes" : "No" 
  const onSwitch = on_Switch == true ? "Yes" : "No" 
   
    return (
      <>
      <section className="container">
          <div key={key} class="con-card">
            <h2 class="title">{title}</h2>
            <img class="img-single" src={image} alt={title} />
                  <div class="con">
                    <p>Genre: {genre}</p>
                    <p>Summary: {summary}</p>
                    <p>Playable on PC? <strong>{onPC}</strong></p>
                    <p>Playable on Xbox? <strong>{onXbox}</strong></p>
                    <p>Playable on Playstation? <strong>{onPS}</strong></p>
                    <p>Playable on Switch? <strong>{onSwitch}</strong></p>
                    
                    {/* <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
                    <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default GameCard;