
import react, {useEffect, useState} from 'react';
import { useFetch } from '../hooks/useFetch';
import { MovieCard } from './MovieCard';
import './MoviesList.css'
import '../index.css'

export const MoviesList = ({ value }) => {

    const api_key = '7eacd6128d20ace0ff21bd07eaff842b'
   
    const {data , loading} = useFetch('https://api.themoviedb.org/3/movie/'+ value +'?api_key=' +api_key+ '&language=en-US&page=1')


  return (

    <>
        {
            (!loading) ? 
            <div className='spinner-center'>
                <div className="spinner-custom spinner-border text-primary" role="status" />
            </div>
            :
            <>
                <form className="d-flex mt-4 justify-content-end search-button">
                        <input className="inputCustom form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn searchButton " type="submit">Search</button>
                </form>
                <div className='animate__animated animate__fadeIn  mb-3 mt-3 row rows-cols-1 row-cols-md-3 g-3'>  
                        {
                            data.results.map((movie , i) => (
                                
                                <MovieCard 
                                    key={ (movie.id) } 
                                    {...movie}
                                    
                                    />
                            ))
                            
                        }

                </div>
            </>

        }
        </>
    
  );
};
