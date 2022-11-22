import styles from '../styles/Account.module.scss'
import fonts from '../styles/Fonts.module.scss'

export default function Account() {
    return (
        <div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Norse/Giant Runes:</div>
                <div className={fonts.norse}>Account Page</div>
                <div className={fonts.giant}>Account Page</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Dwarvish/Gnomish/Goblin/Primordial:</div>
                <div className={fonts.dwarvish}>Account Page</div>
                <div className={fonts.gnomish}>Account Page</div>
                <div className={fonts.goblin}>Account Page</div>
                <div className={fonts.primordial}>Account Page</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Draconic/Orc:</div>
                <div className={fonts.draconic}>Account Page</div>
                <div className={fonts.orc}>Account Page</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Abyssal/Infernal:</div>
                <div className={fonts.abyssal}>Account Page</div>
                <div className={fonts.infernal}>Account Page</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Elvish/Sylvan/Undercommon:</div>
                <div className={fonts.elvish}>Account Page</div>
                <div className={fonts.sylvan}>Account Page</div>
                <div className={fonts.undercommon}>Account Page</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Arcane/Celestial:</div>
                <div className={fonts.arcane}>Account Page</div>
                <div className={fonts.celestial}>Account Page</div>
            </div>
        </div>
    )
}