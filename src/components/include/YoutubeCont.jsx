import React from 'react'

const YoutubeItem = ( {youtube} ) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
        <img src={youtube.snippet.thumbnails.medium.url} alt={youtube.snippet.title} />
        <em>
          <span className="title">{youtube.snippet.title}</span>
        </em>
      </a>
    </li>
  );
};

export const YoutubeCont = ( {youtubes} ) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default YoutubeCont