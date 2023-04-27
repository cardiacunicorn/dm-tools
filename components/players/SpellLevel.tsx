import { SpellLevel } from '../../data/interfaces';
import Checkbox from '../Checkbox';
import SpellSlot from './SpellSlot'
import styles from '../../styles/Players.module.scss'

export default function SpellLevelDisplay ({ spellLevel }) {

  var checkboxes: JSX.Element[] = [];

  // checkboxes.push(<SpellSlot id={spellLevel.level + '-' + i} type={spellLevel.level} value={true} />)

  for (let i = 1; i <= spellLevel.total; i++) {
    if (i <= spellLevel.used) {
      // checkboxes.push(<Checkbox id={spellLevel.level + '-' + i} value={true} />)
      checkboxes.push(<SpellSlot id={spellLevel.level + '-' + i} type={spellLevel.level} value={true} />)
    } else {
      checkboxes.push(<SpellSlot id={spellLevel.level + '-' + i} type={spellLevel.level} value={false} />)
    }
  }

  return (
      <div className={styles.spell_row}>
        <div className={styles.level_slots}>
          {checkboxes}
        </div>
        <div className={styles.spell_level}>
          {/* L{spellLevel.level} */}
        </div>
      </div>
  )
}