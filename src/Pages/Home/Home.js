import home from './home.module.css'
import { useNavigate } from 'react-router-dom'
import { BsPatchQuestionFill } from 'react-icons/bs'
import Button from '../../Atom/Button/Button'
import Dropdown from '../../Atom/Dropdown/Dropdown';
import { BsQuestionLg } from 'react-icons/bs'
import { inputValue } from '../../Recoil/RecoilAtom';
import { useRecoilState } from 'recoil'

const Home = () => {
    const navigate = useNavigate()
    const [inputCapture , setInputCapture] = useRecoilState(inputValue)

    function handleStartButton() {
        if(inputCapture === ''){
            alert('Please Select Quiz Topic')
        } if(inputCapture !== '')
        navigate('/quiz')
    }
    function handleInput(e) {
       setInputCapture(e.target.value) 
    }
    console.log(inputCapture)
    return (
        <div className={home.mainComponent}>
            <div className={home.left}>
                <p className={home.icon}><BsPatchQuestionFill /></p>
                <p className={home.icon1}><BsPatchQuestionFill /></p>
                <h2 className={home.heading}>Welcome To <span className={home.name}>"Mohd Shoaib's"
                </span>Simple Quiz App Built On<br />
                    <span className={home.name}>"React"...!!</span> </h2>
            </div>
            <div className={home.right}>
                <div className={home.dropDownContent}>
                    <h1 className={home.heading2}> Quiz App...<p className={home.Icon2}><BsQuestionLg /><BsQuestionLg /></p></h1>
                    <p className={home.topic}>Choose Quiz Topic From The Below ..?</p>
                    <div className={home.start}>
                        <Dropdown onChange={handleInput} />
                        <Button Name='START' onClick={handleStartButton}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home