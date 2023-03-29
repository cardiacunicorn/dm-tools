// import styles from '../styles/globals.module.scss'

const Tag = ({ name, symbol, color }) => {

  return (
      <div className={"tag border-"+color} key={name}>
        <div className="tag_name">
            {name}
        </div>
      </div>
  )
}

export default Tag