// NOTE: This Grid Library could be exactly what I need for the customisable Character view or the DM Screen:
// https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html

/*
  Min/Max Width/Height would work well for certain elements: https://react-grid-layout.github.io/react-grid-layout/examples/9-min-max-wh.html
  Bounding will keep players features bumping into different sheets: https://react-grid-layout.github.io/react-grid-layout/examples/16-bounded.html
*/

import GridLayout from 'react-grid-layout';
import Player from '../components/players/Player'
import { players } from '../data/players/players'
import styles from '../styles/Party.module.scss'
import Button from '../components/Button'

export default function Party() {
  return (
    <div>
      <h1>Soggy Donkey Boyz</h1>
      <div className={styles.hotbar}>
        <Button color={'$green'} text="Long Rest" type="button" />
        <Button color={'$blue'} text="Short Rest" type="button" />
        <Button color={'$grey'} text="Clear Init" type="button" />
      </div>
      <div className={styles.party}>
        {players.map((player) => (
          <Player player={player} />
        ))}
      </div>
    </div>
  )
}
