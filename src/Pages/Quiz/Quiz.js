import quiz from './quiz.module.css'
import Button from '../../Atom/Button/Button'
import {Topic1 , Topic2 , Topic3 , inputValue ,isGeneralValue ,isTechnicalValue,isMathsValue } from '../../Recoil/RecoilAtom'
import {useRecoilValue , useRecoilState} from 'recoil'
import { useState} from 'react'
import {GiPartyPopper} from 'react-icons/gi'

const Quiz = () => {
    const General = useRecoilValue(Topic1)
    const Technical = useRecoilValue(Topic2)
    const Mathematics = useRecoilValue(Topic3)
    const inputCapture = useRecoilValue(inputValue)
    const [isGeneral , setIsGeneral] = useRecoilState(isGeneralValue)
    const [isTechnical , setIsTechnical] = useRecoilState(isTechnicalValue)
    const [isMaths , setIsMaths] = useRecoilState(isMathsValue)
    const [count , setCount] = useState(0)
    const [score , setScore ] = useState(0)
    const [resultCard , setResultCard] = useState(false)

    function Rendering(){      
        if(inputCapture === 'General Quiz'){
          setIsGeneral(true)
          General[count].options.map((element)=> element.true)  
          setIsTechnical(false)
          setIsMaths(false)  
        } 
        if(inputCapture === 'Technical Quiz'){
            setIsTechnical(true)
            setIsMaths(false)
            setIsGeneral(false)
        }
        if(inputCapture === 'Mathematical Quiz'){
            setIsMaths(true)
            setIsGeneral(false)
            setIsTechnical(false)
        }  
        
    } Rendering()

    function handleNextClick() {
        if( count< General.length){
        setCount(count + 1)
        }         
    }
    function handleInputCapture(e){
      const userInput = e.target.value
      if(userInput === 'true'){
        setScore(score + 2)
      }
    }
    function handleSubmitButton(){
      setResultCard(true)
    }

    return (
        <div className={quiz.mainComponent}>
           {resultCard ? 
            <div className={quiz.content}>
                <h1><GiPartyPopper className={quiz.partyIcon} /> Congratulations Your score is {score} <GiPartyPopper className={quiz.partyIcon} /></h1>
            </div> 

           :

            <div className={quiz.content}>
            <h2 className={quiz.heading}>Question  <span className={quiz.question}>{count}</span><span className={quiz.number}>/5</span></h2> 
              {isGeneral && <><h4 className={quiz.heading2}>{General[count].question}</h4>
              {General[count].options.map((element) => <p className={quiz.options}> <input onChange={handleInputCapture} value={element.isCorrect}  type='radio' name='radio' /> {element.option} </p> )}</>}


              {isTechnical &&  <><h4 className={quiz.heading2}>{Technical[count].question}</h4>
              {Technical[count].options.map((element)=> <p  className={quiz.options}> <input onChange={handleInputCapture} value={element.isCorrect}  type='radio' name='radio' />{element.option}</p>)}</> }
              

              {isMaths &&  <><h4 className={quiz.heading2}>{Mathematics[count].question}</h4>
              {Mathematics[count].options.map((element)=> <p className={quiz.options}> <input onChange={handleInputCapture} value={element.isCorrect} type='radio' name='radio' />{element.option}</p>)}</>} 

              <div className={quiz.button}>
               {count===4 ? <Button onClick={handleSubmitButton}  Name='Submit'/> : <Button onClick={handleNextClick} Name='Next'  />}
            </div>  
            </div> }
            
        </div>
    )
}

export default Quiz