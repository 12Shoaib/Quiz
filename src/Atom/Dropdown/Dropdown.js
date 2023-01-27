import dropdown from './dropdown.module.css'
const Dropdown = (props) => {

    return (
        <div className={dropdown.dropdown}>
            <select onChange={props.onChange} className={dropdown.container}>
                <option>Select</option>
                <option>General Quiz</option>
                <option>Technical Quiz</option>
                <option>Mathematical Quiz</option>
                
            </select>
        </div>
    )
}
export default Dropdown