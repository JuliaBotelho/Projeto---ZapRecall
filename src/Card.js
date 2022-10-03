import React, { useState } from "react"
import styled from "styled-components";
import play from "./img/seta_play.png"
import turn from "./img/seta_virar.png"
import wrong from "./img/icone_erro.png"
import right from "./img/icone_certo.png"
import almost from "./img/icone_quase.png"


export default function Card( {order, q, numDone, setnumDone }) {
  const buttons = [{ color: "#FF3030", text: "Não Lembrei" }, { color: "#FF922E", text: "Quase não lembrei" }, { color: "#2FBE34", text: "Zap!" }]
  const images = [wrong,almost,right]
  const [isOpen, setisOpen] = useState(false)
  const [isTurned, setisTurned] = useState(false)
  const [isDone, setisDone] = useState(false)
  const [theColor, settheColor] = useState("")
  const [imageIndex, setimageIndex] = useState(null)

  function openCard(q, setisOpen) {
    q.opened = true
    setisOpen(q.opened)
    console.log(isOpen)
  }

  function turnCard(q, setisTurned) {
    q.turned = true
    setisTurned(q.turned)
  }

  let newStatus;
  let newColor;

  function cardDone(b,index,setisDone, settheColor, setimageIndex) {
    newStatus = true
    setisDone(newStatus)

    newColor = b.color
    settheColor(newColor)

    setimageIndex(index)

    setnumDone(numDone + 1)
    
  }

  return (
    <>
      {isDone ?
        <Cardfinal coloured = {theColor}>
          <p>Pergunta {order}</p>
          <img src={images[imageIndex]}/>
        </Cardfinal>
        :
        <Carddeck isOpen={isOpen} isTurned={isTurned} q={q} >
          {isOpen ? <p data-identifier="flashcard-question">{isTurned ? q.answer : q.question}</p> : <p data-identifier="flashcard-index-item">Pergunta {order}</p>}
          {isOpen ? <>{isTurned ? <Buttonsconteiner>{buttons.map((b,index) => (<Mybutton color={b.color} onClick={() => cardDone(b, index,setisDone, settheColor, setimageIndex)}> {b.text} </Mybutton>))}</ Buttonsconteiner> :
            <img src={turn} alt="Arrow to turn card" onClick={() => turnCard(q, setisTurned)} data-identifier="flashcard-turn-btn"/>}
          </>
            : <img src={play} alt="Arrow to open card" onClick={() => openCard(q, setisOpen)} data-identifier="flashcard-show-btn"/>}
        </Carddeck>
      }
    </>
  )
}


const Carddeck = styled.div`
  width: 300px;
  height: ${props => props.isOpen ? "100px" : "35px"};
  background-color: ${props => props.isOpen ? "#FCFC9C" : "#FFFFFF"};
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.isOpen ? "column" : "row"}; 
  justify-content: space-between;
  position: relative;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => props.isOpen ? "400" : "700"};
    font-size: ${props => props.isOpen ? "16px" : "18px"};
    line-height: ${props => props.isOpen ? "19px" : "22px"};
    color: #333333;
  }
  img{
    position: absolute;
    bottom: ${props => props.isOpen ? "10px" : "20px"};
    right: 10px;
  }
`
const Buttonsconteiner = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 10px;
`

const Mybutton = styled.button`
    width: 85px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:#FFFFFF;
    background-color: ${(props => props.color)};
    border: 1px solid ${(props => props.color)};
    border-radius: 5px;
    padding:2px;
    margin: 0px 3px
`
const Cardfinal = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  p{
    font-family: 'Recursive';
    text-decoration: line-through;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.coloured};
  }
`

