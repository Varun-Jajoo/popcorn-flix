import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Review() {
  const { id ,name} = useParams();
  const [movie, setMovie] = useState(null);

   useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8f62dc1c436eaa30faf4aaab8ae3212f`);
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [ id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="" style={{color :"white", overflowX:""}}>
      
    <div class="hi">
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} class="d-block w-100" alt="..."/>
   
      <div className="row" >
        <div className="overlay">

          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid rounded" />
        </div>
        </div>
        </div>
        <div className="" style={{marginLeft :"4vw",marginTop :"7vh",color :"white",fontSize :"5vh"}}>
           {movie.title}
          <p  style={{color :"white",fontWeight :"lighter"}}>{movie.overview}</p>
        </div>
      
    
    </div>
 
  );
}
