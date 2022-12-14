import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Title from '../layout/Title';
import YoutubeSlider from '../include/YoutubeSlider';
import YoutubeBtn from '../include/YoutubeBtn';
import YoutubeSearch from '../include/YoutubeSearch';
import YoutubeCont from '../include/YoutubeCont';
import Contact from '../layout/Contact';
import { useState } from 'react';
import { useEffect } from 'react';

// tmp
// import dummy from "../../utils/dummy.json";

export const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [randomVideos, setrandomVideos] = useState([]);
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAmOyKrz9aq1HX5kEwKEUGNmAvJ11pAkwo&part=snippet&q=${query}&maxResults=30&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    async function fetchYoutube() {
      await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyAmOyKrz9aq1HX5kEwKEUGNmAvJ11pAkwo&maxResults=20&type=video"
      )
        .then((response) => response.json())
        .then((result) => {
          setYoutubes(result.items);
        })
        .catch((error) => console.log("error", error));
    }

    async function fetchRandomYoutube() {
      await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAmOyKrz9aq1HX5kEwKEUGNmAvJ11pAkwo&maxResults=20&type=video"
      )
        .then((response) => response.json())
        .then((result) => {
          setrandomVideos(result.items);
        })
        .catch((error) => console.log("error", error));
    }
    fetchYoutube();
    fetchRandomYoutube();
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference api"]} />
        <YoutubeSlider youtubes={randomVideos} />
        <YoutubeSearch onSearch={search} />
        <YoutubeBtn onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;