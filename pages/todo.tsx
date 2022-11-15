import { useState } from 'react'
import styles from '../styles/Todo.module.scss'
import ToDoItem from '../components/ToDoItem'
import Button from '../components/Button'
import Tasks from '../components/Tasks'
import { FaChevronDown } from 'react-icons/fa'

export default function Todo() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Test Task',
            done: true
        },
        {
            id: 2,
            text: 'Finish the ReactJS Crash Course Video',
            done: false
        }
    ])

    return (
        <div>
            <h1>To Do Lists</h1>
            <hr />
            <Tasks tasks={tasks} />
            <h3 className={styles.task_category}>Party View <Button color='pink' text='pink button' /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Display Player Information'} />
                <ToDoItem item={'Create a Player Block'} />
                <ToDoItem item={'Create a Party View'} />
                <ToDoItem item={'Drag and Drop Player Block Elements'} />
                <ToDoItem item={'Drag and Drop Player Blocks'} />
                <ToDoItem item={'Calculate D.P.R. and damage over rounds with current state'} />
            </div>
            <h3 className={styles.task_category}>Encounter View <Button text='default button' /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Create a Monster Block'} />
                <ToDoItem item={'Dropdown Monster Block Details'} />
                <ToDoItem item={'Set HP to Avg, Max Buttons'} />
                <ToDoItem item={'Set Alignment toggle'} />
                <ToDoItem item={'Quick Add +/- 1 CR button'} />
                <ToDoItem item={'Add Racial Traits button'} />
                <ToDoItem item={'Add a Spell or Feature button'} />
                <ToDoItem item={'Suggested Loot in dropdown'} />
                <ToDoItem item={'Optimal D.P.R. for Monsters'} />
                <ToDoItem item={'Rounds to win for each side with current state'} />
                <ToDoItem item={'Rounds to win with D.P.R. considering damage type and resistances'} />
                <ToDoItem item={'Apply damage and status to multiple'} />
            </div>
            <h3 className={styles.task_category}>Hardcore Mode <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Exhaustion or Wounded on knockout'} />
                <ToDoItem item={'Rest Location'} />
                <ToDoItem item={'Individual Player Rules, not whole party'} />
                <ToDoItem item={'Baldur\'s Gate Rules'} />
            </div>
            <h3 className={styles.task_category}>Economics <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Using D.P.R. to determine Magic Item rewards'} />
                <ToDoItem item={'Rewards by Challenge Rating'} />
                <ToDoItem item={'Haggling Rules'} />
                <ToDoItem item={'Simplified Looting & Harvesting'} />
            </div>
            <h3 className={styles.task_category}>Maps <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Upload file and zoom'} />
                <ToDoItem item={'Drop pins and save'} />
                <ToDoItem item={'Click pins for details'} />
                <ToDoItem item={'How to hand draw a continent'} />
                <ToDoItem item={'How to DungeonDraft'} />
            </div>
            <h3 className={styles.task_category}>Custom Rules <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Deck of Many Fates'} />
                <ToDoItem item={'Tattoo Spells by Gemstone'} />
                <ToDoItem item={'Naval Combat'} />
            </div>
            <h3 className={styles.task_category}>Tools <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Generate town building names'} />
                <ToDoItem item={'Populate with NPCs'} />
                <ToDoItem item={'Printable Spell Scroll Cards'} />
                <ToDoItem item={'Reincarnation Roll Table'} />
                <ToDoItem item={'Build your own Rolltable'} />
                <ToDoItem item={'Random Encounter Roll Table'} />
            </div>
            <h3 className={styles.task_category}>Organisation <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Notion walkthrough'} />
                <ToDoItem item={'World Anvil walkthrough'} />
                <ToDoItem item={'Binder walkthrough'} />
            </div>
            <h3 className={styles.task_category}>Practical <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'TV Case Building'} />
                <ToDoItem item={'3D Printing Introduction'} />
                <ToDoItem item={'Foundry Setup'} />
                <ToDoItem item={'Overview of Foundry, Talespire, Roll20'} />
            </div>
            <h3 className={styles.task_category}>Story <FaChevronDown /></h3>
            <hr />
            <div className={styles.list}>
                <ToDoItem item={'Generating a backstory, with a map, reincarnation and NPC table'} />
                <ToDoItem item={'Integrating level up features with story'} />
                <ToDoItem item={'Mapping relationships'} />
                <ToDoItem item={'Session 0: Level 0 Concept'} />
            </div>
        </div>
    )
}