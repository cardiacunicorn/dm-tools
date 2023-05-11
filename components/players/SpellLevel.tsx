import { SpellLevel } from '../../data/interfaces';
import Checkbox from '../Checkbox';
import SpellSlot from './SpellSlot'
import styles from '../../styles/Players.module.scss'

export default function SpellLevelDisplay ({ spellLevel }) {

  var checkboxes: JSX.Element[] = [];

  for (let i = 1; i <= spellLevel.total; i++) {
    if (i <= spellLevel.used) {
      checkboxes.push(<SpellSlot key={spellLevel.level + '-' + i} id={spellLevel.level + '-' + i} type={spellLevel.level} value={true} />)
    } else {
      checkboxes.push(<SpellSlot key={spellLevel.level + '-' + i} id={spellLevel.level + '-' + i} type={spellLevel.level} value={false} />)
    }
  }

  return (
      <div className={styles.spell_row}>
        <div className={styles.level_slots}>
          {checkboxes}
        </div>
        <div className={styles.spell_level}>
          {spellLevel.level}
        </div>
      </div>
  )
}