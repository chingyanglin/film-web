import React from "react";
import styled from "styled-components";

export default function Award({ title, description }) {
  const AwrdSection = styled.div`
    padding: 15rem 2rem;
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.2rem;
      padding: 0.2rem 0rem;
    }
    .line {
      width: 50%;
      background: #23d997;
      height: 0.3rem;
      margin: 1rem 0rem;
    }
  `;
  return (
    <AwrdSection>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwrdSection>
  );
}
