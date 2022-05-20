import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "./GameCard";

function Game() {
  const [{ data: concert, error, status }, setGame] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/concerts/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((concert) =>
          setGame({ data: concert, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setGame({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section className="container-single">
      <div class="con-card-single">

            <img class="card-image" src={concert.image} alt={concert.name} />
            <h2 class="title-single">{concert.name} featuring {concert.band_name} </h2>
            
          <div class="con-single">
            <p>Date: {concert.date}</p>
            <p>Time: {concert.time}</p>
            <p>Genre: {concert.genre}</p>
          </div>
           
        </div>
    </section>
  );
}

export default Game;
