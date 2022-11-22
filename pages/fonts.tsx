import styles from '../styles/FantasyFonts.module.scss'

export default function Fonts() {
    return (
        <div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>D&D 5E:</div>
                <div className="title red">Title</div>
                <div className="headline brown">Headline</div>
                <div className="sans">Sans</div>
                <div className="sans green">Uncommon item</div>
                <div className="sans blue">Rare item</div>
                <div className="sans purple">Very rare item</div>
                <div className="sans gold">Legendary item</div>
                <div className="text">Text</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Norse/Giant Runes:</div>
                <div className={styles.norse}>Norse</div>
                <div className={styles.giant}>Giant</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Dwarvish/Gnomish/Goblin/Primordial:</div>
                <div className={styles.dwarvish}>Dwarvish</div>
                <div className={styles.gnomish}>Gnomish</div>
                <div className={styles.goblin}>Goblin</div>
                <div className={styles.primordial}>Primordial</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Draconic/Orc:</div>
                <div className={styles.draconic}>Draconic</div>
                <div className={styles.orc}>Orcish</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Abyssal/Infernal:</div>
                <div className={styles.abyssal}>Abyssal</div>
                <div className={styles.infernal}>Infernal</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Elvish/Sylvan/Undercommon:</div>
                <div className={styles.elvish}>Elvish</div>
                <div className={styles.sylvan}>Sylvan</div>
                <div className={styles.undercommon}>Undercommon</div>
            </div>
            <div className={styles.font_box}>
                <div className={styles.font_descriptor}>Arcane/Celestial:</div>
                <div className={styles.arcane}>Arcane</div>
                <div className={styles.celestial}>Celestial</div>
            </div>
        </div>
    )
}