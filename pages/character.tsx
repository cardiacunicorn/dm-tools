import { useState, useEffect } from 'react'
import styles from '../styles/Character.module.scss'

// const url = 'https://character-service.dndbeyond.com/character/v5/character/75936428'
const url = 'https://api.github.com/users/deekshasharma'

export default function Character() {

  const [characterData, setCharacterData] = useState({})

  const fetchData = () => {
    fetch(url)
      .then(res => {
          return res.json()
      })
      .then(data => {
        console.log(data)
        setCharacterData(data)
      })
  }

  useEffect(() => {
      fetchData()
  },[]);

  return (
    <div>
      <code>{url}</code>
      {/* Must render exact line items, not an object */}
      <code>{characterData.name}</code>
    </div>
  )
}