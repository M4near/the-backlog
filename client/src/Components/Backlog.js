import React, { useState, useEffect } from "react";
import ListItemCard from "./ListItemCard";

function Backlog({listItemsData, setListItemsData, deleteListItem}) {

  useEffect(() => {
    fetch('/list_items')
      .then(res => res.json())
      .then((data) => setListItemsData(data))
  }, [])

  const renderListItems = listItemsData.map((listItem)=>(
    <ListItemCard key={listItem.id} id={listItem.id} title={listItem.game.title} genre={listItem.game.genre} image={listItem.game.image} summary={listItem.game.summary} on_PC={listItem.game.on_PC} on_Xbox={listItem.game.on_Xbox}  on_Playstation={listItem.game.on_Playstation} on_Switch={listItem.game.on_Switch} deleteListItem={deleteListItem}/>
    ));

  return (
    <div class="Backlog">
    {renderListItems}
    </div>
    
  );
}

export default Backlog;