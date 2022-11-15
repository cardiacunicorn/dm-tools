import { useState } from 'react'
import styles from '../styles/Todo.module.scss'
import ToDoItem from '../components/ToDoItem'
import Button from '../components/Button'
import TaskCategory from '../components/TaskCategory'

export default function Todo() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Test Task',
            category: 'General',
            done: true
        },
        {
            id: 2,
            text: 'Finish the ReactJS Crash Course Video',
            category: 'General',
            done: false
        },
        {
            id: 3,
            text: 'Display Player Information',
            category: 'Party View',
            done: false
        },
        {
            id: 4,
            text: 'Create a Player Block',
            category: 'Party View',
            done: false
        },
        {
            id: 5,
            text: 'Create a Party View',
            category: 'Party View',
            done: false
        },
        {
            id: 6,
            text: 'Drag and Drop Player Block Elements',
            category: 'Party View',
            done: false
        },
        {
            id: 7,
            text: 'Drag and Drop Player Blocks',
            category: 'Party View',
            done: false
        },
        {
            id: 8,
            text: 'Calculate D.P.R. and damage over rounds with current state',
            category: 'Party View',
            done: false
        },
        {
            id: 9,
            text: 'Exhaustion or Wounded on knockout',
            category: 'Hardcore',
            done: false
        },
        {
            id: 10,
            text: 'Rest Location',
            category: 'Hardcore',
            done: false
        },
        {
            id: 11,
            text: 'Individual Player Rules, not whole party',
            category: 'Hardcore',
            done: false
        },
        {
            id: 12,
            text: 'Baldur\'s Gate Rules',
            category: 'Hardcore',
            done: false
        },
        {
            id: 13,
            text: 'Deck of Many Fates',
            category: 'Custom Rules',
            done: false
        },
        {
            id: 14,
            text: 'Tattoo Spells by Gemstone',
            category: 'Custom Rules',
            done: false
        },
        {
            id: 15,
            text: 'Naval Combat',
            category: 'Custom Rules',
            done: false
        },
        {
            id: 16,
            text: 'Notion Walkthrough',
            category: 'Organisation',
            done: false
        },
        {
            id: 17,
            text: 'World Anvil Walkthrough',
            category: 'Organisation',
            done: false
        },
        {
            id: 18,
            text: 'Binder Walkthrough',
            category: 'Organisation',
            done: false
        },
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div>
            <h1>To Do</h1>
            <Button color='green' text='Check All' />
            <Button color='red' text='Reset' />
            <hr />
            <TaskCategory category={'General'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Party View'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Encounter View'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Economics'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Maps'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Tools'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Organisation'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Practical'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Custom Rules'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Story'} tasks={tasks} onDelete={deleteTask} />
            <TaskCategory category={'Hardcore'} tasks={tasks} onDelete={deleteTask} />
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
            <div className={styles.list}>
                <ToDoItem item={'Using D.P.R. to determine Magic Item rewards'} />
                <ToDoItem item={'Rewards by Challenge Rating'} />
                <ToDoItem item={'Haggling Rules'} />
                <ToDoItem item={'Simplified Looting & Harvesting'} />
            </div>
            <div className={styles.list}>
                <ToDoItem item={'Upload file and zoom'} />
                <ToDoItem item={'Drop pins and save'} />
                <ToDoItem item={'Click pins for details'} />
                <ToDoItem item={'How to hand draw a continent'} />
                <ToDoItem item={'How to DungeonDraft'} />
            </div>
            <div className={styles.list}>
                <ToDoItem item={'Generate town building names'} />
                <ToDoItem item={'Populate with NPCs'} />
                <ToDoItem item={'Printable Spell Scroll Cards'} />
                <ToDoItem item={'Reincarnation Roll Table'} />
                <ToDoItem item={'Build your own Rolltable'} />
                <ToDoItem item={'Random Encounter Roll Table'} />
            </div>
            <div className={styles.list}>
                <ToDoItem item={'TV Case Building'} />
                <ToDoItem item={'3D Printing Introduction'} />
                <ToDoItem item={'Foundry Setup'} />
                <ToDoItem item={'Overview of Foundry, Talespire, Roll20'} />
            </div>
            <div className={styles.list}>
                <ToDoItem item={'Generating a backstory, with a map, reincarnation and NPC table'} />
                <ToDoItem item={'Integrating level up features with story'} />
                <ToDoItem item={'Mapping relationships'} />
                <ToDoItem item={'Session 0: Level 0 Concept'} />
            </div>
        </div>
    )
}