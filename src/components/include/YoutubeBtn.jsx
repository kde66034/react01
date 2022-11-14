import React, { useCallback } from "react";

const keyword = [
    { name: "New York" },
    { name: "Berlin" },
    { name: "Helsinki" },
    { name: "London" },
    { name: "Tokyo" },
    { name: "Seoul" },
    { name: "Stockholm" },
  ];
const SearchBtn = ({ data, func }) => {
  return <li onClick={func}>{data.name}</li>;
};

export const YoutubeBtn = ({ onSearch }) => {
  const onClickSearch = useCallback(
    (e) => {
      onSearch(e.target.textContent);
    },
    [onSearch]
  );

  return (
    <section className="cont__youtubeBtn">
      <h2>Keywords</h2>
      <ul className="youtube__btn">
        {keyword.map((v, index) => (
          <SearchBtn key={v + index} func={onClickSearch} data={v} />
        ))}
      </ul>
    </section>
  );
};

export default YoutubeBtn