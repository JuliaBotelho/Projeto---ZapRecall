import styled from "styled-components"
import React, { useState } from "react";

export default function Footer({numDone}) {

    return (
        <Footersection>
            <h1 data-identifier="flashcard-counter">  {numDone}/8 CONCLUÍDOS</h1>
        </Footersection>
    )
}

const Footersection = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`