import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MovieState } from "./movieState";
import MovieDisplay from "../components/MovieDisplay";
import Award from "../components/Award";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
export default function MovieDetails() {
  const url = useLocation();
  const [movie, setMovie] = useState(MovieState);
  const [renderMovie, setRenderMovie] = useState([]);
  const [awards, setAwards] = useState([]);
  useEffect(() => {
    const curretMoive = movie.filter((m) => m.url === url.pathname);
    setRenderMovie(curretMoive[0]);
    setAwards(curretMoive[0].awards);
  }, [url.pathname]);
  console.log(awards);
  const awrdInfo = awards.map((awrd) => {
    return <Award title={awrd.title} description={awrd.description} />;
  });
  const AwardSection = styled.div`
    min-height: 60vh;
    display: flex;
    margin: 1rem 2rem;
    align-items: center;
    justify-content: space-around;
  `;
  const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  `;
  const Details = styled(motion.div)`
    color: #fff;
  `;
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MovieDisplay
        title={renderMovie.title}
        maingImg={renderMovie.mainImg}
        secondImg={renderMovie.secondaryImg}
      />
      <AwardSection>{awrdInfo}</AwardSection>
      <ImageDisplay>
        <img src={renderMovie.secondaryImg} alt="" />
      </ImageDisplay>
    </Details>
  );
}
