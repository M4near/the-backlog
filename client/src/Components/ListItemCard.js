import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GamesList from "./GamesList"


function ListItemCard({key, id, title, genre, image, summary, on_PC, on_Xbox, on_Playstation, on_Switch, completed, recommends, rank, deadline, time_played, deleteListItem, updateListItem, setListItemsData}) {
  const [showAll, setShowAll] = useState(false)
  const [additionalTimePlayed, setAdditonalTimePlayed] = useState()
  const [userDeadline, setUserDeadline] = useState()

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  const limit = 10

  const onPC = on_PC == true ? "Yes" : "No" 
  const onXbox = on_Xbox == true ? "Yes" : "No" 
  const onPS = on_Playstation == true ? "Yes" : "No" 
  const onSwitch = on_Switch == true ? "Yes" : "No" 
  const complete = completed == true ? "Yes" : "No" 
  const recommended = recommends == true ? "Yes" : "No" 
  const time = time_played ? time_played : 0
  const displayDeadline = deadline ? deadline : "No Deadline Set"
  
  
  function handleCompleted() {
   let dict = {}
   console.log(completed)
    dict["completed"] = !completed
    updateListItem(id,dict)
  }

  function handleRecommends() {
   let dict = {}
   console.log(recommends)
    dict["recommends"] = !recommends
    updateListItem(id,dict)
  }

  function handleTimePlayed(e){
    console.log(e)
    let dict = {}
    console.log(additionalTimePlayed)
    dict["time_played"] = parseInt(time) + parseInt(additionalTimePlayed)
    updateListItem(id,dict)
  }

  function handleDeadline(e){
    console.log(e)
    let dict = {}
    dict["deadline"] = userDeadline
    updateListItem(id,dict)
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
              <p>Completed? <strong>{complete}</strong></p> <button class="button-85" onClick={() => handleCompleted()}>Completed</button>
              <p>Recommend? <strong>{recommended}</strong></p><button class="button-85" onClick={() => handleRecommends()}>Recommend</button>
              <p>Deadline <strong>{displayDeadline}</strong></p>
              <form onSubmit={handleDeadline} >
                    <label >
                      Update Deadline:
                    </label>
                    <input
                      type="string"
                      value={userDeadline}
                      placeholder="YYYY-MM-DD"
                      onChange={(e) => setUserDeadline(e.target.value)}
                    />
                  <button class="button-85" type="submit" >
                    Update
                  </button>
                  </form>
              <p>Time Played:<strong>{time} hours</strong></p>
              <form onSubmit={handleTimePlayed} >
                    <label >
                      Log Time Played in hours:
                    </label>
                    <input
                      type="integer"
                      value={additionalTimePlayed}
                      onChange={(e) => setAdditonalTimePlayed(e.target.value)}
                    />
                  <button class="button-85" type="submit" >
                    Update Time Played
                  </button>
                  </form>
              {/* <button>Rank</button> */}
              <button class="button-85" onClick={() => deleteListItem(id)}>Remove from Backlog</button>
              
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
              <p>Completed? <strong>{complete}</strong></p> <button class="button-85" onClick={() => handleCompleted()}>Completed</button>
              <p>Recommend? <strong>{recommended}</strong></p><button class="button-85" onClick={() => handleRecommends()}>Recommend</button>
              <p>Deadline <strong>{displayDeadline}</strong></p>
              <form onSubmit={handleDeadline} >
                    <label >
                      Update Deadline:
                    </label>
                    <input
                      type="string"
                      value={userDeadline}
                      placeholder="YYYY-MM-DD"
                      onChange={(e) => setUserDeadline(e.target.value)}
                    />
                  <button class="button-85" type="submit" >
                    Update
                  </button>
                  </form>
              <p>Time Played:<strong>{time} hours</strong></p>
              <form onSubmit={handleTimePlayed} >
                    <label >
                      Log Time Played in hours:
                    </label>
                    <input
                      type="integer"
                      value={additionalTimePlayed}
                      onChange={(e) => setAdditonalTimePlayed(e.target.value)}
                    />
                  <button class="button-85" type="submit" >
                    Update Time Played
                  </button>
                  </form>
              {/* <button>Rank</button> */}
              <button class="button-85" onClick={() => deleteListItem(id)}>Remove from Backlog</button>
              
            </div>
    </div>
  
</section>
    
    // <div> 
    //   {summary} 
    //   <button onClick={showLess}>Read less</button> 
    // </div>
  }

  
   
    // return (
    //   <>
    //   <section className="container">
    //       <div key={key} class="con-card">
    //         <h2 class="title">{title}</h2>
    //         <img class="img-single" src={image} alt={title} />
    //               <div class="con">
    //                 <p>Genre: {genre}</p>
    //                 {/* <p>Summary: {summary.length > 250 ? `${summary.substring(0, 250)}...` : summary}</p> */}
    //                 <p>{summary.substring(0, 100)}... <button onClick={showMore}>See More</button></p>
    //                 <p>Playable on PC? <strong>{onPC}</strong></p>
    //                 <p>Playable on Xbox? <strong>{onXbox}</strong></p>
    //                 <p>Playable on Playstation? <strong>{onPS}</strong></p>
    //                 <p>Playable on Switch? <strong>{onSwitch}</strong></p>
    //                 <button onClick={() => deleteListItem(id)}>Remove from Backlog</button>
    //                 <button>Set Deadline</button>
    //                 <button>Recommend</button>
    //                 <button>Don't Recommend</button>
    //                 <button>Completed?</button>
                    
    //               </div>
    //       </div>
         
    //   </section>
    //   </>
    // );
  }
  
  export default ListItemCard;