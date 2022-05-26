import React, { useState, useEffect } from "react";
import ListItemCard from "./ListItemCard";

function Backlog({listItemsData, setListItemsData, deleteListItem, updateListItem}) {
  const [countCompleted, setCountCompleted] = useState()
  const [countIncomplete, setCountIncomplete] = useState()

  // useEffect(() => {
  //   fetch('/list_items')
  //     .then(res => res.json())
  //     .then((data) => setListItemsData(data))
  // }, [])

  useEffect(() => {
    fetch('/countcompleted')
      .then(res => res.json())
      .then((data) => setCountCompleted(data))
  }, [])

  useEffect(() => {
    fetch('/countincomplete')
      .then(res => res.json())
      .then((data) => setCountIncomplete(data))
  }, [])

  function filterOutCompletedGames() {
    let x = listItemsData.filter(listItem => !listItem.completed)
    setListItemsData(x)
  }

  // function showOnlyCompletedGames() {
  //   let x = listItemsData.filter(listItem => listItem.completed)
  //   setListItemsData(x)
  // }

  function showAllGames() {
    setListItemsData(listItemsData)
    window.location.reload()
  }

  const renderListItems = listItemsData.map((listItem)=>(
    <ListItemCard key={listItem.id} id={listItem.id} title={listItem.game.title} genre={listItem.game.genre} image={listItem.game.image} summary={listItem.game.summary} on_PC={listItem.game.on_PC} on_Xbox={listItem.game.on_Xbox}  on_Playstation={listItem.game.on_Playstation} on_Switch={listItem.game.on_Switch} completed={listItem.completed} recommends={listItem.recommends} rank={listItem.rank} deadline={listItem.deadline} time_played={listItem.time_played} deleteListItem={deleteListItem} setListItemsData={setListItemsData} updateListItem={updateListItem}/>
    ));

  return (
    <div class="Backlog">
      <br/>
      <button onClick={showAllGames}>Show All Games</button>
      <button onClick={filterOutCompletedGames}>Show Uncompleted Games</button>
      {/* <button onClick={showOnlyCompletedGames}>Show Completed Games</button> */}
     <p> Number of Completed Games: {countCompleted}</p>
     <p>Number of Uncompleted Games:{countIncomplete}</p>
    {renderListItems}
    </div>
    
  );
}

export default Backlog;