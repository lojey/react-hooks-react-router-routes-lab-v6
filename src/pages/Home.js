import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    fetch(`/movies`)
    .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Info goes here! */}
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.id} id={movie.id} title={movie.title} />
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
