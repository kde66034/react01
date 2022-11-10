import React from 'react';
import { useState, useEffect } from 'react';  // 리액트에서쓰는변수
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';

import Title from '../layout/Title';
import MovieCont from '../include/MovieCont';
import MovieSearch from '../include/MovieSearch';
import PopMovies from '../include/PopMovies';
import Contact from '../layout/Contact';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [pop, setPop] = useState([]);

  const search = async (query) => {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=657bc92cb91cb42e311f58ddd303bff6&query=${query}&page=1&language=ko-KR`)
    .then((response) => response.json())
    .then((result) => setMovies(result.results))
    .catch((error) => console.log(error))
  };

useEffect(() => {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=657bc92cb91cb42e311f58ddd303bff6&query=marvel&page=1")
  .then((response) => response.json())
  .then((result) => setMovies(result.results))
  .catch((error) => console.log(error))

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=657bc92cb91cb42e311f58ddd303bff6&language=ko-KR&page=1")
    .then((response) => response.json())
    .then((result) => setPop(result.results))
    .catch((error) => console.log(error))
}, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <PopMovies movies={pop} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Movie;