const Checkbox = ({ id, value }) => {

  return (
      <input type="checkbox" id={id} defaultChecked={value}>
      </input>
  )
}

export default Checkbox