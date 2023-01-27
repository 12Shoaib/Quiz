import button from './button.module.css'
const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={button.button}>{props.Name}</button>
        </div>
    )
}
export default Button