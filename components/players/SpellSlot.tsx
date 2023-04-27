import styles from '../../styles/Players.module.scss'

export default function SpellSlot({ id, type, value }) {
    return (
        <label className={styles.spellslot}>
            <input type="checkbox" id={id} className={`l_${type}`} defaultChecked={value} />
            <span className={styles.checkmark}></span>
        </label>
    )
}