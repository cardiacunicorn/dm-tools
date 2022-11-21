import styles from '../styles/Account.module.scss'
import fonts from '../styles/Fonts.module.scss'

export default function Account() {
    return (
        <div>
            <div>
                Norse Runes:<br /><span className={fonts.norse}>Account Page</span>
            </div>
            <div>
                Dwarvish/Giant/Gnomish/Goblin/Primordial:<br /><span className={fonts.dwarvish}>Account Page</span>
            </div>
            <div>
                Draconic/Orc:<br /><span className={fonts.draconic}>Account Page</span>
            </div>
            <div>
                Abyssal/Infernal:<br /><span className={fonts.infernal}>Account Page</span>
            </div>
            <div>
                Elvish/Sylvan/Undercommon:<br /><span className={fonts.elvish}>Account Page</span>
            </div>
        </div>
    )
}