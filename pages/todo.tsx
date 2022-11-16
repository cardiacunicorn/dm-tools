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
        {
            id: 28,
            text: 'TV Case Building',
            category: 'Practical',
            status: 'incomplete'
        },
        {
            id: 29,
            text: '3D Printing Introduction',
            category: 'Practical',
            status: 'incomplete'
        },
        {
            id: 30,
            text: 'Foundry Setup',
            category: 'Practical',
            status: 'incomplete'
        },
        {
            id: 31,
            text: 'Overview of Foundry, Talespire, Roll20',
            category: 'Practical',
            status: 'incomplete'
        },
        {
            id: 32,
            text: 'Generate town building names',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 33,
            text: 'Populate with NPCs',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 34,
            text: 'Printable Spell Scroll Cards',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 35,
            text: 'Reincarnation Roll Table',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 36,
            text: 'Build your own Rolltable',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 37,
            text: 'Random Encounter Roll Table',
            category: 'Tools',
            status: 'incomplete'
        },
        {
            id: 38,
            text: 'Generating a backstory, with a map, reincarnation and NPC table',
            category: 'Story',
            status: 'incomplete'
        },
        {
            id: 39,
            text: 'Integrating level up features with story',
            category: 'Story',
            status: 'incomplete'
        },
        {
            id: 40,
            text: 'Mapping relationships',
            category: 'Story',
            status: 'incomplete'
        },
        {
            id: 41,
            text: 'Session 0: Level 0 Concept',
            category: 'Story',
            status: 'incomplete'
        },
        {
            id: 42,
            text: 'Create a Monster Block',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 43,
            text: 'Dropdown Monster Block Details',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 44,
            text: 'Set HP to Avg, Max Buttons',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 45,
            text: 'Set Alignment toggle',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 46,
            text: 'Quick Add +/- 1 CR button',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 47,
            text: 'Add Racial Traits button',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 48,
            text: 'Add a Spell or Feature button',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 49,
            text: 'Suggested Loot in dropdown',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 50,
            text: 'Optimal D.P.R. for Monsters',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 51,
            text: 'Rounds to win for each side with current state',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 52,
            text: 'Rounds to win with D.P.R. considering damage type and resistances',
            category: 'Encounter View',
            status: 'incomplete'
        },
        {
            id: 53,
            text: 'Apply damage and status to multiple',
            category: 'Encounter View',
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
        </div>
    )
}