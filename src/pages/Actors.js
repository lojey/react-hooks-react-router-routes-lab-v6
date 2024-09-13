import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] =useState([]);
  useEffect(() => {
    fetch('/actors')  // Update this URL to match your API endpoint
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => console.error('Error fetching actors:', error));
  }, []);
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors</h1>
        {actors.length > 0 ? (
          actors.map(actor => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No actors available.</p>
        )}
      </main>
    </>
  );
};

export default Actors;
