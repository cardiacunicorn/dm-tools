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
            status: 'done'
        },
        {
            id: 2,
            text: 'Finish the ReactJS Crash Course Video',
            category: 'General',
            status: 'progressing'
        },
        {
            id: 3,
            text: 'Display Player Information',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 4,
            text: 'Create a Player Block',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 5,
            text: 'Create a Party View',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 6,
            text: 'Drag and Drop Player Block Elements',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 7,
            text: 'Drag and Drop Player Blocks',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 8,
            text: 'Calculate D.P.R. and damage over rounds with current state',
            category: 'Party View',
            status: 'incomplete'
        },
        {
            id: 9,
            text: 'Exhaustion or Wounded on knockout',
            category: 'Hardcore',
            status: 'incomplete'
        },
        {
            id: 10,
            text: 'Rest Location',
            category: 'Hardcore',
            status: 'incomplete'
        },
        {
            id: 11,
            text: 'Individual Player Rules, not whole party',
            category: 'Hardcore',
            status: 'incomplete'
        },
        {
            id: 12,
            text: 'Baldur\'s Gate Rules',
            category: 'Hardcore',
            status: 'incomplete'
        },
        {
            id: 13,
            text: 'Deck of Many Fates',
            category: 'Custom Rules',
            status: 'incomplete'
        },
        {
            id: 14,
            text: 'Tattoo Spells by Gemstone',
            category: 'Custom Rules',
            status: 'incomplete'
        },
        {
            id: 15,
            text: 'Naval Combat',
            category: 'Custom Rules',
            status: 'incomplete'
        },
        {
            id: 16,
            text: 'Notion Walkthrough',
            category: 'Organisation',
            status: 'incomplete'
        },
        {
            id: 17,
            text: 'World Anvil Walkthrough',
            category: 'Organisation',
            status: 'incomplete'
        },
        {
            id: 18,
            text: 'Binder Walkthrough',
            category: 'Organisation',
            status: 'incomplete'
        },
        {
            id: 19,
            text: 'Using D.P.R. to determine Magic Item rewards',
            category: 'Economics',
            status: 'incomplete'
        },
        {
            id: 20,
            text: 'Loot by Challenge Rating',
            category: 'Economics',
            status: 'incomplete'
        },
        {
            id: 21,
            text: 'Haggling Rules',
            category: 'Economics',
            status: 'incomplete'
        },
        {
            id: 22,
            text: 'Simplified Looting & Harvesting',
            category: 'Economics',
            status: 'incomplete'
        },
        {
            id: 23,
            text: 'Upload file and zoom',
            category: 'Maps',
            status: 'incomplete'
        },
        {
            id: 24,
            text: 'Drop pins and save',
            category: 'Maps',
            status: 'incomplete'
        },
        {
            id: 25,
            text: 'Click pins for details',
            category: 'Maps',
            status: 'incomplete'
        },
        {
            id: 26,
            text: 'How to hand draw a continent',
            category: 'Maps',
            status: 'incomplete'
        },
        {
            id: 27,
            text: 'How to DungeonDraft',
            category: 'Maps',
            status: 'incomplete'
        },
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Set Status
    const setStatus = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                if (task.status === 'done') {
                    return {...task, status: 'incomplete'}
                } else if (task.status === 'progressing') {
                    return {...task, status: 'done'}
                } else {
                    return {...task, status: 'progressing'}
                }
            } else {
                return task
            }
        }));
    }

    return (
        <div>
            <h1>To Do</h1>
            <input type="text" />
            <select name="category" id="category">
                <option value="General">General</option>
                <option value="Party View" selected>Party View</option>
                <option value="Encounter View">Encounter View</option>
                <option value="Economics">Economics</option>
                <option value="Maps">Maps</option>
                <option value="Tools">Tools</option>
                <option value="Organisation">Organisation</option>
                <option value="Practical">Practical</option>
                <option value="Custom Rules">Custom Rules</option>
                <option value="Story">Story</option>
                <option value="Hardcore">Hardcore</option>
            </select>
            <Button color='green' text='Add' />
            <hr />
            <TaskCategory category={'General'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Party View'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Encounter View'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Economics'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Maps'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Tools'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Organisation'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Practical'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Custom Rules'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Story'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
            <TaskCategory category={'Hardcore'} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />
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