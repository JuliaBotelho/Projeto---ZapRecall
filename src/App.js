import React, { useState } from "react";
import ConteinerLogo from "./ConteinerLogo";
import Deck from "./Deck";
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"


export default function App() {


    return (
        <>
            <Screenconteiner>
                <ConteinerLogo />
                <Deck />
            </Screenconteiner>
            <GlobalStyle />
        </>
    )
}

const Screenconteiner = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
