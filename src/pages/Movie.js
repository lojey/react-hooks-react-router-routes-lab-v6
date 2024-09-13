import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
function Movie() {
  const { id } = useParams();  
  const [movie, setMovie] = useState(null);
useEffect(()=>{
  fetch(`/movies/${id}`)
  .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if(!movie){

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>Loading...</h1>
      </main>
    </>
  );
}

return (
  <>
    <header>
      <NavBar />  {/* Include navigation bar */}
    </header>
    <main>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <p>Description: {movie.description}</p>  {/* Adjust field names as needed */}
    </main>
  </>
);
}

export default Movie;
