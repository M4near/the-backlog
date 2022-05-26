import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import './App.css';
import GamesList from "./Components/GamesList";
import Backlog from "./Components/Backlog";
import Home from "./Components/Home";
import GamesPage from "./Components/GamesPage";
import GameCard from "./Components/GameCard";
import NewGameForm from "./Components/NewGameForm";

function App() {
  const [user, setUser] = useState(null);
  const [gamesData, setGamesData] = useState([]);
  const [listItemsData, setListItemsData] = useState([]);
  const history = useHistory();
  // const location = useLocation();
  // const [countCompleted, setCountCompleted] = useState()
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/games')
      .then(res => res.json())
      .then((data) => setGamesData(data))
  }, [])

  useEffect(() => {
    fetch('/list_items')
      .then(res => res.json())
      .then((data) => setListItemsData(data))
  }, [])

  // useEffect(() => {
  //   fetch('/countcompleted')
  //     .then(res => res.json())
  //     .then((data) => setCountCompleted(data))
  // }, [])


  const addGame = (formData) => {
    fetch('/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newGame => {
        setGamesData(gamesData.concat(newGame))
      });
  }

  const addListItem = (formData) => {
    console.log(JSON.stringify(formData))
    fetch('/list_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newListItem => {
        setListItemsData(listItemsData.concat(newListItem))
      })
      ;
  }

  const updateListItem = (id, formData) => {
    fetch(`/list_items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedListItem => {
        // pessimistically update the game in state after we get a response from the api
        setListItemsData(listItemsData.map((listItem) => (listItem.id === parseInt(id) ? updatedListItem : listItem)));
        console.log(updatedListItem)
        console.log(listItemsData);
        // history.push(`/comments`);
      });
  }

  // const deleteListItem = (listItem_id) => {
  //     // optimistically update the ui
  //     setListItemsData(listItemsData.filter(listItem => listItem.id !== parseInt(listItem_id)))
  //     // update the API
  //     fetch(`/list_items/${listItem_id}`, {
  //       method: 'DELETE',
  //       headers: { Accept: 'application/json' }
  //     })
  //       .then(res => res.json())
  //       .then(deletedListItem => {
  //         console.log('deleted', deletedListItem.listItem_id)
  //         if (location.pathname !== "/list_items") {
  //           history.push("/list_items")
  //           // window.location.reload()
  //         }
  //       });
  // }

  function deleteListItem(id) {
    fetch(`/list_items/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setListItemsData((listItemData) =>
        listItemData.filter((listItemData) => listItemData.id !== id)
        );
      }
    });
  }

  if (!user) 
  return (
    <Router>
    <Navbar  />
    <Switch>
    <Route exact path="/">
        <Login onLogin={setUser} />
      </Route>
      <Route exact path="/signup">
        <Signup onLogin={setUser}  />
      </Route>
    </Switch> 
  </Router>
); else {

return (

  <Router>
    <Navbar user={user} setUser={setUser} />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
       <Route exact path="/games">
        <GamesPage gamesData={gamesData} setGamesData={setGamesData} addListItem={addListItem} />
      </Route>
      <Route exact path="/backlog">
        <Backlog listItemsData={listItemsData} setListItemsData={setListItemsData} deleteListItem={deleteListItem} updateListItem={updateListItem} />
      </Route>
      <Route exact path="/addgame">
        <NewGameForm addGame={addGame} gamesData={gamesData} setGamesData={setGamesData} />
      </Route>
    </Switch> 
  </Router>
);
}}

export default App;
