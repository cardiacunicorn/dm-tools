import { useState, useEffect } from 'react'
import useSWR from 'swr'

const characterURL = 'https://character-service.dndbeyond.com/character/v5/character/75936428'
const [characterData, setCharacterData] = useState([
  {}
])
// const res = await fetch(characterURL)
// const articles = await res.json()

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// useEffect(() => {
//   fetch(characterURL)
//       .then(response => response.json())
//       .then(data => setCharacterData(data.data));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);



export default function Character({character}) {

  // const { data, error } = useSWR(
  //   characterURL,
  //   fetcher
  // );
  
  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  return (
    <div>
      <code>{characterURL}</code>
      <code>{character}</code>
    </div>
  )
}

// Adding data functions
export const getStaticProps = async () => {
  const res = await fetch(characterURL)
  const character = await res.json()

  return {
      props: {
          character
      }
  }
}