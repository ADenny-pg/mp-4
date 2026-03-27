
"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

const StyledDiv=styled.div`
    margin: 0 auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: cadetblue;
    min-height: 100vw;
`;

export default function Home() {

  const [State, setState] = useState("");

  return (
      <StyledDiv>
        <h1>Find the Gas Prices in any State!</h1>
        <p>Enter a State abbreviation below to learn the gas prices</p>
          <p>Example. NY, NJ, MA</p>
        <input type="text" value={State} placeholder="State name" onChange={(e) => setState(e.target.value)}/>
        <Link href={`/${State}`}>Get Gas Prices</Link>
      </StyledDiv>
  );
}
