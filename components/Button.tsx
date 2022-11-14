// import styles from '../styles/Layout.module.scss'

const Button = ({ color, text }) => {
  return (
    // not sure why this .pink class isn't found from existing Layout css
    <button style={{backgroundColor: color}} className={color}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button