import { useState, useEffect } from 'react'
import styles from '../styles/Character.module.scss'

// const characterURL = 'https://character-service.dndbeyond.com/character/v5/character/75936428'
const characterURL = 'https://api.github.com/users/deekshasharma'

export default function Character() {

  const [characterData, setCharacterData] = useState([])

  let displayData

  const pullJson = async () => {

    const res = await fetch(characterURL);
    const jsonData = await res.json();

    displayData = jsonData.data.map(function(character) {
        return(
            <div>
              {character.name}
            </div>
        )
    })
    setCharacterData(displayData);

    // fetch(characterURL)
    //   .then(res => res.json())
    //   .then(json => {
    //       console.log(json.data)
    //       displayData = json.data
    //       setCharacterData(displayData)
    //   })
  }

  useEffect(() => {
      pullJson();
  },[]);

  return (
    <div>
      <code>{characterURL}</code>
      <code>{characterData}</code>
    </div>
  )
}