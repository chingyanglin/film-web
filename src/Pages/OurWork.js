import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodTimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
import { MovieState } from "./movieState";
export default function OurWork() {
  const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
      padding: 1rem 0rem;
    }
  `;
  const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  `;

  const url = useLocation();
  const params = useParams();
  const [movie, setMoive] = useState(MovieState);
  console.log(movie[0].url);
  console.log(url);
  console.log(params);
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="The Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodTimes} alt="The Good Times" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="The Racer" />
        </Link>
      </Movie>
    </Work>
  );
}
