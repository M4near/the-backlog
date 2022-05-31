import React, { useEffect, useState } from 'react';

function NewGameForm({addGame, setGameData}) {
    const [title, setTitle] = useState();
    const [genre, setGenre] = useState();
    const [image, setImage] = useState();
    const [summary, setSummary] = useState();
    const [on_PC, setOn_PC] = useState();
    const [on_Xbox, setOn_Xbox] = useState();
    const [on_Playstation, setOn_Playstation] = useState();
    const [on_Switch, setOn_Switch] = useState();


    const handleSubmit = async (e) => {
        // e.preventDefault();
    
        addGame({
          title,
          genre,
          image,
          summary,
          on_PC,
          on_Xbox,
          on_Playstation,
          on_Switch
        })
        
      };

  

    return (
        <>
      <h1 class="new-game-form-title">Add a game here!</h1>
      <form
        onSubmit={handleSubmit}
        className="addForm"
      >
        <fieldset className="newGameFieldset">
          <label class="form-label" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            className="input"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset className="newGameFieldset">
            <label class="form-label" htmlFor="genre">
            Genre:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="genre"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            >
            <option >Select a Genre</option>
            <option value= "First Person Shooter">First Person Shooter (FPS)</option>
            <option value= "Action Role-Playing">Action Role-Playing</option>
            <option value= "Action-adventure">Action-adventure</option>
            <option value= "Action Role-Playing">Action Role-Playing</option>
            <option value= "Sandbox">Sandbox</option>
            <option value= "Role-playing">Role-playing (RPG)</option>
            <option value= "Simulation">Simulation</option>
            <option value= "Puzzle-platform">Puzzle-platform</option>
            <option value= "Survival horror">Survival horror</option>
            <option value= "Kart racer">Kart racer</option>
            <option value= "N/A">N/A</option>
            </select>
            
        </fieldset>
        <div>

        <fieldset className="newGameFieldset">
          <label class="form-label" htmlFor="image">
            Image URL:
          </label>
          <input
            type="text"
            className="input"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </fieldset>

        <fieldset className="newGameFieldset">
          <label class="form-label" htmlFor="summary">
            Summary:
          </label>
          <input
            type="text"
            className="input"
            name="summary"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </fieldset>

        <fieldset className="newGameFieldset">
            <label class="form-label" htmlFor="on_PC">
            Playable on PC?
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="on_PC"
            id="on_PC"
            value={on_PC}
            onChange={(e) => setOn_PC(e.target.value)}
            >
            <option default value= "false">No</option>
            <option value= "true">Yes</option>
            
            </select>
        </fieldset>

        <fieldset className="newGameFieldset">
            <label class="form-label" htmlFor="on_Xbox">
            Playable on Xbox?
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="on_Xbox"
            id="on_Xbox"
            value={on_Xbox}
            onChange={(e) => setOn_Xbox(e.target.value)}
            >
            <option default value= "false">No</option>
            <option value= "true">Yes</option>
            </select>
        </fieldset>

        <fieldset className="newGameFieldset">
            <label class="form-label" htmlFor="on_Playstation">
            Playable on Playstation?
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="on_Playstation"
            id="on_Playstation"
            value={on_Playstation}
            onChange={(e) => setOn_Playstation(e.target.value)}
            >
            <option default value= "false">No</option>
            <option value= "true">Yes</option>
            </select>
        </fieldset>

        <fieldset className="newGameFieldset">
            <label class="form-label" htmlFor="on_Switch">
            Playable on Switch?
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="on_Switch"
            id="on_Switch"
            value={on_Switch}
            onChange={(e) => setOn_Switch(e.target.value)}
            >
            <option default value= "false">No</option>
            <option value= "true">Yes</option>
            </select>
        </fieldset>

        <button
          class="com-btn"
          type="submit"
        >
          Submit Game
        </button>
        </div>
      </form>
    </>
  );
    
}

export default NewGameForm;