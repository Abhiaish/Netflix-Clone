import axios from './axios'
import React, { useState ,useEffect} from 'react'
import './Row.css'
import YouTube from 'react-youtube';
// import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({title ,fetchUrl ,isLargeRow}) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    
    useEffect(() => {
        async function fetchData(){
                const request= await axios.get(fetchUrl);
              //  console.log(request.data.results);
                setMovies(request.data.results);
                return request
        }
        fetchData()
    }, [fetchUrl]);

    // console.log(movies)
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
             // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        },

    };
    const handleClick = async(movie) =>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=944b8148da9cd34b86f31dc90b661468`
              );
              setTrailerUrl(trailerurl.data.results[0]?.key);
            }
    }
    return (
        <div className='row'>
        <h2>{title}</h2>
 
       <div className="row_posters">
           {/* row posters */}
           {movies.map(movie=>(
                
               <img  key={movie.id}
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               onClick={() => handleClick(movie)} 
               src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
               alt={movie.name}/>
               
           ))}
        
       </div>
    {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row