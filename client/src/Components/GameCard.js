import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GamesList from "./GamesList"


function GameCard({key, id, title, genre, image, summary, on_PC, on_Xbox, on_Playstation, on_Switch, addListItem}) {
  const [showAll, setShowAll] = useState(false)

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  const limit = 10

  const onPC = on_PC == true ? "Yes" : "No" 
  const onXbox = on_Xbox == true ? "Yes" : "No" 
  const onPS = on_Playstation == true ? "Yes" : "No" 
  const onSwitch = on_Switch == true ? "Yes" : "No" 

  function handleSubmit(id) {
    let dict = {}
    dict['game_id'] = id
    addListItem(dict)
  }
  

  if (showAll === false && summary.length > 250) {
    // there is nothing more to show
    // return <div>{summary}</div>
    return <section className="container">
    <div key={key} class="con-card">
      <h2 class="title">{title}</h2>
      <img class="img-single" src={image} alt={title} />
            <div class="con">
              <p>Genre: {genre}</p>
              {/* <p>Summary: {summary.length > 250 ? `${summary.substring(0, 250)}...` : summary}</p> */}
              <p>{summary.substring(0, 250)}... <button onClick={showMore}>See More</button></p>
              <p>Playable on PC? <strong>{onPC}</strong></p>
              <p>Playable on Xbox? <strong>{onXbox}</strong></p>
              <p>Playable on Playstation? <strong>{onPS}</strong></p>
              <p>Playable on Switch? <strong>{onSwitch}</strong></p>
              <button class="button-85" onClick={() => handleSubmit(id)}>Add to Backlog</button>
              {/* <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
              <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
            </div>
    </div>
  
</section>
  } if (showAll === true) {
    // We show the extended text and a link to reduce it
    return <section className="container">
    <div key={key} class="con-card">
      <h2 class="title">{title}</h2>
      <img class="img-single" src={image} alt={title} />
            <div class="con">
              <p>Genre: {genre}</p>
              {/* <p>Summary: {summary.length > 250 ? `${summary.substring(0, 250)}...` : summary}</p> */}
              <p>{summary} <button onClick={showLess}>See Less</button></p>
              <p>Playable on PC? <strong>{onPC}</strong></p>
              <p>Playable on Xbox? <strong>{onXbox}</strong></p>
              <p>Playable on Playstation? <strong>{onPS}</strong></p>
              <p>Playable on Switch? <strong>{onSwitch}</strong></p>
              <button class="button-85" onClick={() => addListItem(id)}>Add to Backlog</button>
              {/* <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
              <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
            </div>
    </div>
  
</section>
    
    // <div> 
    //   {summary} 
    //   <button onClick={showLess}>Read less</button> 
    // </div>
  }

  
   
    return (
      <>
      <section className="container">
          <div key={key} class="con-card">
            <h2 class="title">{title}</h2>
            <img class="img-single" src={image} alt={title} />
                  <div class="con">
                    <p>Genre: {genre}</p>
                    {/* <p>Summary: {summary.length > 250 ? `${summary.substring(0, 250)}...` : summary}</p> */}
                    <p>{summary.substring(0, 100)}... <button onClick={showMore}>See More</button></p>
                    <p>Playable on PC? <strong>{onPC}</strong></p>
                    <p>Playable on Xbox? <strong>{onXbox}</strong></p>
                    <p>Playable on Playstation? <strong>{onPS}</strong></p>
                    <p>Playable on Switch? <strong>{onSwitch}</strong></p>
                    <button class="button-85" onClick={() => addListItem(id)}>Add to Backlog</button>
                    {/* <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
                    <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default GameCard;