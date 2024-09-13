import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {

  const [directors, setDirectors] = useState([]);
   
  useEffect(() => {
    fetch('/directors')  // Update this URL to match your API endpoint
      .then(response => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error('Error fetching directors:', error));
  }, []);


  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors</h1>
        {directors.length > 0 ? (
          directors.map(director => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No directors available.</p>
        )}
      </main>
    </>
  );
};

export default Directors;
