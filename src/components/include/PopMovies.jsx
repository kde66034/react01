import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const MovieBox = ({ movie, index }) => {
    if (index > 19) return;
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                {movie.poster_path === null ? <span>이미지가 없습니다.</span> : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />}
                <em>
                    <span className='title'>{movie.title}</span>
                    <span className='star'>{movie.vote_average}</span>
                </em>
                <div className="rank__desc">
                    <span className='rank'>{index+1}</span>
                </div>
            </a>
        </li>
    );
}

export const PopMovies = ({ movies }) => {
    return (
        <div className='pop__movie'>
            <div className="container">
                <div className="pop__inner">
                    <h2>오늘의 인기영화 TOP 10</h2>
                <Swiper
                  pagination={true}
                  // navigation={true}
                  spaceBetween={30}
                  slidesPerView={5}
                  slidesPerGroup={5}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                     
                {movies.map((movie, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <MovieBox key={index} rank={index} movie={movie} index={index} />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
                    
                </div>
            </div>
        </div>
    );
}

export default PopMovies;