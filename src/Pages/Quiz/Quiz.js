import quiz from './quiz.module.css'
import Button from '../../Atom/Button/Button'
import {Topic1 , Topic2 , Topic3 , inputValue ,isGeneralValue ,isTechnicalValue,isMathsValue } from '../../Recoil/RecoilAtom'
import {useRecoilValue , useRecoilState} from 'recoil'
import { useState} from 'react'

const Quiz = () => {
    const General = useRecoilValue(Topic1)
    const Technical = useRecoilValue(Topic2)
    const Mathematics = useRecoilValue(Topic3)
    const inputCapture = useRecoilValue(inputValue)
    const [isGeneral , setIsGeneral] = useRecoilState(isGeneralValue)
    const [isTechnical , setIsTechnical] = useRecoilState(isTechnicalValue)
    const [isMaths , setIsMaths] = useRecoilState(isMathsValue)
    const [count , setCount] = useState(0)
    const [isSubmit , setIsSubmit] = useState(false)
    const [score , setScore ] = useState(0)

    function Rendering(){      
        if(inputCapture === 'General Quiz'){
          setIsGeneral(true)
          General[count].options,map((element)=> element.true)  
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
        }else{
         setIsSubmit(true) 
        } 
         
    }

    return (
        <div className={quiz.mainComponent}>
            <div className={quiz.content}>
            <h2 className={quiz.heading}>Question  <span className={quiz.question}>{count}</span><span className={quiz.number}>/5</span></h2> 
              {isGeneral && <><h4 className={quiz.heading2}>{General[count].question}</h4>
              {General[count].options.map((element) => <p className={quiz.options}> <input  type='radio' name='radio' /> {element.option} </p> )}</>}


              {isTechnical &&  <><h4 className={quiz.heading2}>{Technical[0].question}</h4>
              {Technical[0].options.map((element)=> <p  className={quiz.options}> <input type='radio' name='radio' />{element.option}</p>)}</> }
              

              {isMaths &&  <><h4 className={quiz.heading2}>{Mathematics[0].question}</h4>
              {Mathematics[0].options.map((element)=> <p className={quiz.options}> <input  type='radio' name='radio' />{element.option}</p>)}</>} 

              <div className={quiz.button}>
               {isSubmit ? <Button  Name='Submit'/> : <Button onClick={handleNextClick} Name='Next'  />}
            </div>  
            </div>
            
        </div>
    )
}

export default Quiz