import React, { useState } from "react"
//import styled from "styled-components"
import Card from "./Card"
import Footer from "./Footer";


export default function Deck({ doneList, setdoneList }) {
  const questions = [{ order: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", opened: false, turned: false },
  { order: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", opened: false, turned: false },
  { order: 3, question: "Componentes devem iniciar com __ ", answer: "letra maiúscula", opened: false, turned: false },
  { order: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões", opened: false, turned: false },
  { order: 5, question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma", opened: false, turned: false },
  { order: 6, question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências", opened: false, turned: false },
  { order: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes", opened: false, turned: false },
  { order: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", opened: false, turned: false }
  ]

  const [numDone,setnumDone] = useState(0);

  return (
    <>
      {questions.map((q, index) => (
        <Card
          data-identifier="flashcard"
          key={index}
          order={questions[index].order}
          q={q}
          numDone = {numDone}
          setnumDone = {setnumDone}
        />
      ))}
      <Footer numDone = {numDone}/>
    </>
  )


}

