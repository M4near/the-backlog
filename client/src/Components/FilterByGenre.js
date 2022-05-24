import React from "react";

function FilterByGenre({ setQuery }) {
 
  return (
    <div className="filterByGenre">
      <h2> Find games by genre:</h2>
      {/* <fieldset className="filterByGenre">
          <label className="" htmlFor="genre">
            Genre:
          </label>
          <select
          value={genre}
          onChange={(e) => setQuery(e.target.value)}
          >
          <option value= "First Person Shooter">First Person Shooter</option>
          <option value= "Action Role-Playing">Action Role-Playing</option>
          <option value= "Action-adventure">Dallas</option>
          <option value= "4">San Antonio</option>
          <option value= "5">El Paso</option>
          <option value= "6">Houston</option>
          <option value= "7">Paris</option>
          <option value= "8">Arlington</option>
          </select>
        </fieldset> */}

        <fieldset className="dropdown">
                    {/* <label className="" htmlFor="tripsData">
                        Add to Trip:
                    </label>
                    <select
                        // value={trip}
                        onChange={(e) => handleOnChange(e)}
                    >

                        <option>Select trip</option>
                        {tripsData.map((trip) => <option key={trip.id} value={trip.id}>{trip.trip_title}</option>)}

                    </select> */}
                </fieldset>
    </div>
  );
}

export default FilterByGenre;