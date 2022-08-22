import {useState, useEffect} from 'react'

export default function LevelPage (props)
{

      
    return (
        <div className=' h-full w-full text-left pt-10 md:px-20'>
            <form className=" border-b pb-5  border-[#DBDEF0] ">
            <h2 className=" text-[#293264] font-bold text-2xl md:text-3xl md:font-extrabold" dangerouslySetInnerHTML={{__html:props.question}}/>
            <fieldset >
                <ul className='list-none grid grid-rows-4 grid-flow-col gap-4 text-left pt-5 md:flex md:flex-row md:gap-5 md:mb-10'>
                    <li>
                    <input 
                    className=' hidden peer'
                    type="radio"
                    id= {props.arrAnswers[0]}
                    name= "answer"
                    value= {props.arrAnswers[0]}
                    checked = {props.answer === props.arrAnswers[0]}
                    onChange = {(event) => props.handleAnswer(props.id,event)}
                    required
                />
                <label className={"basis-1/6 grow-0 text-[#293264] text-base px-5 py-2 text-center cursor-pointer border border-solid border-[#4D5B9E] rounded-xl peer-checked:border-0 " + (!props.gameState ? "peer-checked:bg-[#D6DBF5] " : props.arrAnswers[0] === props.correctAnswer ? " bg-green-300 " : " bg-red-200 ")} htmlFor={props.arrAnswers[0]} dangerouslySetInnerHTML={{__html:props.arrAnswers[0]}} />
                <br />
                    </li>
                    <li>
                    <input 
                    className='hidden peer '
                    type="radio"
                    id= {props.arrAnswers[1]}
                    name= "answer"
                    value= {props.arrAnswers[1]}
                    checked = {props.answer === props.arrAnswers[1]}
                    onChange = {(event) => props.handleAnswer(props.id,event)}
                />
                <label className={"basis-1/6 grow-0 text-[#293264] text-base px-5 py-2 text-center cursor-pointer border border-solid border-[#4D5B9E] rounded-xl peer-checked:border-0 " + (!props.gameState ? "peer-checked:bg-[#D6DBF5] " : props.arrAnswers[1] === props.correctAnswer ? " bg-green-300 " : " bg-red-200 ")} htmlFor={props.arrAnswers[1]} dangerouslySetInnerHTML={{__html:props.arrAnswers[1]}} />
                <br />
                    </li>
                    <li>
                    <input 
                    className=' hidden peer '
                    type="radio"
                    id= {props.arrAnswers[2]}
                    name= "answer"
                    value= {props.arrAnswers[2]}
                    checked = {props.answer === props.arrAnswers[2]}
                    onChange = {(event) => props.handleAnswer(props.id,event)}
                />
                <label className={"basis-1/6 grow-0 text-[#293264] text-base px-5 py-2 text-center cursor-pointer border border-solid border-[#4D5B9E] rounded-xl peer-checked:border-0 " + (!props.gameState ? "peer-checked:bg-[#D6DBF5] " : props.arrAnswers[2] === props.correctAnswer ? " bg-green-300 " : " bg-red-200 ")} htmlFor={props.arrAnswers[2]} dangerouslySetInnerHTML={{__html:props.arrAnswers[2]}} />
                <br />
                    </li>
                    <li>
                    <input 
                    className=' hidden peer'
                    type="radio"
                    id= {props.arrAnswers[3]}
                    name= "answer"
                    value= {props.arrAnswers[3]}
                    checked = {props.answer === props.arrAnswers[3]}
                    onChange = {(event) => props.handleAnswer(props.id,event)}
                />
                <label className={"basis-1/6 grow-0 text-[#293264] text-base px-5 py-2 text-center cursor-pointer border border-solid border-[#4D5B9E] rounded-xl peer-checked:border-0 " + (!props.gameState ? "peer-checked:bg-[#D6DBF5] " : props.arrAnswers[3] === props.correctAnswer ? " bg-green-300 " : " bg-red-200 ")} htmlFor={props.arrAnswers[3]} dangerouslySetInnerHTML={{__html:props.arrAnswers[3]}} />
                <br />
                    </li>
                </ul>
            </fieldset>
            </form>
        </div>
    )
}
