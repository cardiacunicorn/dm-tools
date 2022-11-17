const Button = ({ color, text, type }) => {
  return (
    // not sure why this .pink class isn't found from existing Layout css
    <button type={type} style={{backgroundColor: color}} className={color}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button