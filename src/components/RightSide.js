import React, { useState } from 'react'
import './rightSide.css'
import { Data } from './Data'
import arrowDown from "../images/icon-arrow-down.svg"

const RightSide = () => {
    const[answerDisplay, setAnswerDisplay] = useState(Data)

    const textHandle = (item) => {
        if(item.textDisplay) {
            setAnswerDisplay(answerDisplay.map((e) => e.id === item.id ? {...e, textDisplay : false} : e ))
        } else {
            setAnswerDisplay(answerDisplay.map((e) => e.id === item.id ? {...e , textDisplay : true} : {...e  , textDisplay : false} ))
        }
    }

    return (
        <section className="right-side">
            <h1>FAQ</h1>
            {answerDisplay.map((item) => {
                const {question, id, answer, textDisplay} = item
                return (
                    <div className="single-cart" key={id}>
                        <div className="question" onClick={() => textHandle(item)}>
                            <p className={`${textDisplay ? "question-p" : '' }`}>{question}</p>
                            <div><img src={arrowDown} className={`${textDisplay ? "question-img" : '' }`} alt="icon-arrow-down" /></div>
                        </div>
                        <div className={`${textDisplay ? "answer" : 'display-none' }`}>
                            <p>{answer}</p>
                        </div>
                    </div>
                )
            }) }
        </section>
    )
}

export default RightSide
