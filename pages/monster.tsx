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
                        <table key={monster.id}>
                            <tr>
                                <th className={styles.table_head}>
                                    ID
                                </th>
                                <th className={styles.table_head}>
                                    Name
                                </th>
                            </tr>
                            <tr>
                                <td className={styles.table_data}>
                                    {monster.id}
                                </td>
                                <td className={styles.table_data}>
                                    <span className={styles.monster_name}>{monster.name}</span>
                                </td>
                            </tr>
                        </table>
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
            {monstersData}
        </div>
    )
}