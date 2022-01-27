import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './MovieScreen.css'
import '../index.css'

export const MovieScreen = () => {
  

  const { movieId } = useParams()

  const percentage = 66;

  
  const api_key = '7eacd6128d20ace0ff21bd07eaff842b'
  const img_url = 'https://image.tmdb.org/t/p/w500/'
   
  const { data:movies , loading} = useFetch('https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=' + api_key)

  const { data:credits , loading:loading_cast } = useFetch('https://api.themoviedb.org/3/movie/'+ movieId +'/credits?api_key='+ api_key);


 console.log(movies)

  return (
    <>
      {
        (loading && loading_cast)  ?  
        <div className='animate__animated animate__fadeIn'>
            <div className='tarjeta-movie'>
                <div className='row '>
                  
                  <div className='col-md-5 container-cols'>
                   
                    <img className="img-movie img-thumbnail" src={ img_url + movies.poster_path } />
                    
                    
                  </div>

                  <div className='col-md-7 container-cols'>
                    <h3>{movies.original_title}</h3>
                    
                  </div>
              </div>
            </div>
            

            <div className='row'>

            </div> 
      </div>:  
            <div className='spinner-center'>
                <div className="spinner-custom spinner-border text-primary" role="status" />
            </div>
      }
      

      
        
    </>
  );
}
