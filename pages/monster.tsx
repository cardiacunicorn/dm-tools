import { useState, useEffect } from 'react'
import styles from '../styles/Monsters.module.scss'

export default function Monster({ }) {
    const monstersURL = "https://monster-service.dndbeyond.com/v1/monster"
    const monsterURL = "https://monster-service.dndbeyond.com/v1/monster/16762"
    const [monstersData, setMonstersData] = useState()

    let displayData
    function pullJson() {
        fetch(monstersURL)
            .then(res => res.json())
            .then(json => {
                console.log(json.data)
                displayData = json.data.map(function(monster) {
                    return(
                        <tr key={monster.id}>
                            <td>
                                {monster.id}
                            </td>
                            <td>
                                <span className={styles.monster_name}>{monster.name}</span>
                            </td>
                            <td>
                                {monster.challengeRatingId}
                            </td>
                            <td>
                                {monster.armorClass}
                            </td>
                        </tr>
                    )
                })
                setMonstersData(displayData)
            })
    }

    useEffect(() => {
        pullJson()
    },[])

    return (
        <div>
            <h1>Monsters</h1>
            <table id="monsters_table">
                <tr>
                    <th className={styles.table_head}>
                        ID
                    </th>
                    <th className={styles.table_head}>
                        Name
                    </th>
                    <th className={styles.table_head}>
                        CR
                    </th>
                    <th className={styles.table_head}>
                        AC
                    </th>
                </tr>
                {monstersData}
            </table>
        </div>
    )
}