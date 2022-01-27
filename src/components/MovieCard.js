import React from 'react';
import './MovieCard.css'
import {Link} from 'react-router-dom'

export const MovieCard = ({
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
    release_date,
    id
}) => {

    const img_url = 'https://image.tmdb.org/t/p/w500/'

  return (
        <div className='col-md-3'>
            <div  className="card text-white" >
                
                <img src={img_url + poster_path} />
                <div className="card-body example">
                    <div>
                        <div className='contenedor-spaceb'>
                            <h5 className="card-title title-movie">{ original_title }</h5>
                            <p style={{"color": "black"}}><span className='puntuacion'>{vote_average}</span>/10</p> 
                        </div>
                        <div className='linea' />

                    </div>
                    
                    
                    <div className='contenedor-spaceb'>
                        <div className='date-movie'>
                            <p className='update' >LAST UPDATE</p>
                            <p>{release_date}</p>
                        </div>
                        <Link to={`/movie/${id}`} className='btn btn-outline-primary button-more'>
                            More..
                        </Link>
                        
                    </div>
                    
                    

                </div>

            </div>
        </div>
  );
};
