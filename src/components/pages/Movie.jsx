import React from 'react';
import { useState, useEffect } from 'react';  // 리액트에서쓰는변수
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Title from '../layout/Title';
import MovieCont from '../include/MovieCont';
import Contact from '../layout/Contact';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/550?api_key=657bc92cb91cb42e311f58ddd303bff6")
      .then(response => response.json())
      .then(result => setMovies(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["about", "reference api"]} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Movie;