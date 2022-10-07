import React from "react";
import styled from "styled-components";

export default function MovieDisplay({
  theAwards,
  title,
  maingImg,
  secondImg,
}) {
  const Headline = styled.div`
    color: #fff;
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
    }
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  `;
  const Details = styled.div`
    color: #fff;
  `;
  return (
    <Details>
      <Headline>
        <h2>{title}</h2>
        <img src={maingImg} alt="Main Poster" />
      </Headline>
    </Details>
  );
}
