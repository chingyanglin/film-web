import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MovieState } from "./movieState";
export default function MovieDetails() {
  const url = useLocation();
  const [movie, setMovie] = useState(MovieState);
  const [singleMovie, setSingleMovie] = useState(null);
  const clickHandler = () => {
    console.log(url);
  };
  useEffect(() => {
    const curretMoive = movie.filter((m) => m.url === url.pathname);
    setMovie(curretMoive[0]);
  }, [movie, url]);
  return (
    <div>
      <h1></h1>
    </div>
  );
}
