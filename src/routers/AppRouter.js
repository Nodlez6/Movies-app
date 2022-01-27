import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { MoviesList, MoviesScreen } from '../components/MoviesList';
import { MovieCard } from '../components/MovieCard';
import { NavBar } from '../components/NavBar';
import { TopRatedMovies } from '../components/TopRatedMovies';
import { PopularMovies } from '../components/PopularMovies';
import { UpComingMovies } from '../components/UpComingMovies';
import { MovieScreen } from '../components/MovieScreen';

export const AppRouter = () => {
  return (
    <>

      <BrowserRouter>

        <NavBar />

        <div className='container'>
          
              <Routes>
                <Route path="/" element={<TopRatedMovies />} />
                <Route path="/toprated" element={<TopRatedMovies  />} />
                <Route path="/popular" element={<PopularMovies  />} />
                <Route path="/upcoming" element={<UpComingMovies />} />
                <Route path="movie/:movieId" element={<MovieScreen />} />
              </Routes>
          
        </div>
      </BrowserRouter>
      

    </>
  );
};
