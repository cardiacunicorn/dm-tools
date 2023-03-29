// import styles from '../styles/globals.module.scss'

const Tag = ({ name, symbol }) => {

  return (
      <div className="tag" key={name}>
        <div className="tag_name">
            {name}
        </div>
      </div>
  )
}

export default Tag