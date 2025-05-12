import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieList({movies}) {
  return (
    <div className='div'>
      {movies.length>0?
        movies.map((film)=>{
            return(
               <Link to={`/movies/${film.imdbID}`} key={film.imdbID}>
                    <div className='box'>
                       <img className='img'
                       src={film.Poster == "N/A"? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMnC5IThE-C2zwJHsG___WkHjjd1AECOx9A&s": film.Poster} 
                       alt="film-image" />
                       <h3>{film.Title}</h3>
                       <div>
                        <p>{film.Year}</p>
                        <psan></psan>
                        <p>{film.Type =="movie"?"филым":"сериял"}</p>
                       </div>
                    </div>
                </Link>  
            )
        })
      :
      <p className='err'>Филым не найден,напишите запрос</p>
      }
    </div>
  )
}
