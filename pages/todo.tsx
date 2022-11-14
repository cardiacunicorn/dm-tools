import styles from '../styles/Todo.module.scss'
import ToDoItem from '../components/ToDoItem'

export default function Todo() {
    return (
        <div>
            <h1>My To Do List</h1>
            <hr></hr>
            <ToDoItem item={'Finish the NextJS Crash Course Video'}/>
            <ToDoItem item={'Convert the About Page to a To Do list'}/>
            <hr></hr>
            <h3>Party View</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Display Player Information'}/>
                <ToDoItem item={'Create a Player Block'}/>
                <ToDoItem item={'Create a Party View'}/>
                <ToDoItem item={'Drag and Drop Player Block Elements'}/>
                <ToDoItem item={'Drag and Drop Player Blocks'}/>
                <ToDoItem item={'Calculate D.P.R. and damage over rounds with current state'}/>
            </div>
            <hr></hr>
            <h3>Encounter View</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Create a Monster Block'}/>
                <ToDoItem item={'Dropdown Monster Block Details'}/>
                <ToDoItem item={'Set HP to Avg, Max Buttons'}/>
                <ToDoItem item={'Set Alignment toggle'}/>
                <ToDoItem item={'Quick Add +/- 1 CR button'}/>
                <ToDoItem item={'Add Racial Traits button'}/>
                <ToDoItem item={'Add a Spell or Feature button'}/>
                <ToDoItem item={'Suggested Loot in dropdown'}/>
                <ToDoItem item={'Optimal D.P.R. for Monsters'}/>
                <ToDoItem item={'Rounds to win for each side with current state'}/>
                <ToDoItem item={'Rounds to win with D.P.R. considering damage type and resistances'}/>
                <ToDoItem item={'Apply damage and status to multiple'}/>
            </div>
            <hr></hr>
            <h3>Hardcore Mode</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Exhaustion or Wounded on knockout'}/>
                <ToDoItem item={'Rest Location'}/>
                <ToDoItem item={'Individual Player Rules, not whole party'}/>
                <ToDoItem item={'Baldur\'s Gate Rules'}/>
            </div>
            <hr></hr>
            <h3>Economics</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Using D.P.R. to determine Magic Item rewards'}/>
                <ToDoItem item={'Rewards by Challenge Rating'}/>
                <ToDoItem item={'Haggling Rules'}/>
                <ToDoItem item={'Simplified Looting & Harvesting'}/>
            </div>
            <hr></hr>
            <h3>Maps</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Upload file and zoom'}/>
                <ToDoItem item={'Drop pins and save'}/>
                <ToDoItem item={'Click pins for details'}/>
                <ToDoItem item={'How to hand draw a continent'}/>
                <ToDoItem item={'How to DungeonDraft'}/>
            </div>
            <hr></hr>
            <h3>Custom Rules</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Deck of Many Fates'}/>
                <ToDoItem item={'Tattoo Spells by Gemstone'}/>
                <ToDoItem item={'Naval Combat'}/>
            </div>
            <hr></hr>
            <h3>Tools</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Generate town building names'}/>
                <ToDoItem item={'Populate with NPCs'}/>
                <ToDoItem item={'Printable Spell Scroll Cards'}/>
                <ToDoItem item={'Reincarnation Roll Table'}/>
                <ToDoItem item={'Build your own Rolltable'}/>
                <ToDoItem item={'Random Encounter Roll Table'}/>
            </div>
            <hr></hr>
            <h3>Organisation</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Notion walkthrough'}/>
                <ToDoItem item={'World Anvil walkthrough'}/>
                <ToDoItem item={'Binder walkthrough'}/>
            </div>
            <hr></hr>
            <h3>Practical</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'TV Case Building'}/>
                <ToDoItem item={'3D Printing Introduction'}/>
                <ToDoItem item={'Foundry Setup'}/>
                <ToDoItem item={'Overview of Foundry, Talespire, Roll20'}/>
            </div>
            <hr></hr>
            <h3>Story</h3>
            <hr></hr>
            <div className={styles.list}>
                <ToDoItem item={'Generating a backstory, with a map, reincarnation and NPC table'}/>
                <ToDoItem item={'Integrating level up features with story'}/>
                <ToDoItem item={'Mapping relationships'}/>
                <ToDoItem item={'Session 0: Level 0 Concept'}/>
            </div>
        </div>
    )
}