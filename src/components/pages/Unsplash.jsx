import React from "react";
import { useState, useEffect } from "react"; // 리액트에서쓰는변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=xfdJPYosiB60IKciXjurp1cyYs8NSNjdY1lBiLBWfWQ&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=xfdJPYosiB60IKciXjurp1cyYs8NSNjdY1lBiLBWfWQ&query=seoul&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log(error));

      fetch(
        "https://api.unsplash.com/photos/random?client_id=xfdJPYosiB60IKciXjurp1cyYs8NSNjdY1lBiLBWfWQ&count=10"
      )
        .then((response) => response.json())
        .then((result) => setRandom(result))
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
