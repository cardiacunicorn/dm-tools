import { useState } from 'react'
import styles from '../styles/Tasks.module.scss'
import TaskCategory from '../components/tasks/TaskCategory'
import AddTask from '../components/tasks/AddTask'

export default function Tasks() {
    const categoryLists: JSX.Element[] = []
    const categories = [
        'General',
        'Party View',
        'Encounter View',
        'Economics',
        'Maps',
        'Tools',
        'Organisation',
        'Practical',
        'Custom Rules',
        'Story',
        'Hardcore'
    ]
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Test Task',
            category: 'General',
            status: 'Complete'
        },
        {
            id: 2,
            text: 'Finish the ReactJS Crash Course Video',
            category: 'General',
            status: 'Complete'
        },
        {
            id: 3,
            text: 'Display Player Information',
            category: 'Party View',
            status: 'In progress'
        },
        {
            id: 4,
            text: 'Create a Player Block',
            category: 'Party View',
            status: 'Not started'
        },
        {
            id: 5,
            text: 'Create a Party View',
            category: 'Party View',
            status: 'Not started'
        },
        {
            id: 6,
            text: 'Drag and Drop Player Block Elements',
            category: 'Party View',
            status: 'Not started'
        },
        {
            id: 7,
            text: 'Drag and Drop Player Blocks',
            category: 'Party View',
            status: 'Not started'
        },
        {
            id: 8,
            text: 'Calculate D.P.R. and damage over rounds with current state',
            category: 'Party View',
            status: 'Not started'
        },
        {
            id: 9,
            text: 'Exhaustion or Wounded on knockout',
            category: 'Hardcore',
            status: 'Not started'
        },
        {
            id: 10,
            text: 'Rest Location',
            category: 'Hardcore',
            status: 'Not started'
        },
        {
            id: 11,
            text: 'Individual Player Rules, not whole party',
            category: 'Hardcore',
            status: 'Not started'
        },
        {
            id: 12,
            text: 'Baldur\'s Gate Rules',
            category: 'Hardcore',
            status: 'Not started'
        },
        {
            id: 13,
            text: 'Deck of Many Fates',
            category: 'Custom Rules',
            status: 'Not started'
        },
        {
            id: 14,
            text: 'Tattoo Spells by Gemstone',
            category: 'Custom Rules',
            status: 'Not started'
        },
        {
            id: 15,
            text: 'Naval Combat',
            category: 'Custom Rules',
            status: 'Not started'
        },
        {
            id: 16,
            text: 'Notion Walkthrough',
            category: 'Organisation',
            status: 'Not started'
        },
        {
            id: 17,
            text: 'World Anvil Walkthrough',
            category: 'Organisation',
            status: 'Not started'
        },
        {
            id: 18,
            text: 'Binder Walkthrough',
            category: 'Organisation',
            status: 'Not started'
        },
        {
            id: 19,
            text: 'Using D.P.R. to determine Magic Item rewards',
            category: 'Economics',
            status: 'Not started'
        },
        {
            id: 20,
            text: 'Loot by Challenge Rating',
            category: 'Economics',
            status: 'Not started'
        },
        {
            id: 21,
            text: 'Haggling Rules',
            category: 'Economics',
            status: 'Not started'
        },
        {
            id: 22,
            text: 'Simplified Looting & Harvesting',
            category: 'Economics',
            status: 'Not started'
        },
        {
            id: 23,
            text: 'Upload file and zoom',
            category: 'Maps',
            status: 'Not started'
        },
        {
            id: 24,
            text: 'Drop pins and save',
            category: 'Maps',
            status: 'Not started'
        },
        {
            id: 25,
            text: 'Click pins for details',
            category: 'Maps',
            status: 'Not started'
        },
        {
            id: 26,
            text: 'How to hand draw a continent',
            category: 'Maps',
            status: 'Not started'
        },
        {
            id: 27,
            text: 'How to DungeonDraft',
            category: 'Maps',
            status: 'Not started'
        },
        {
            id: 28,
            text: 'TV Case Building',
            category: 'Practical',
            status: 'Not started'
        },
        {
            id: 29,
            text: '3D Printing Introduction',
            category: 'Practical',
            status: 'Not started'
        },
        {
            id: 30,
            text: 'Foundry Setup',
            category: 'Practical',
            status: 'Not started'
        },
        {
            id: 31,
            text: 'Overview of Foundry, Talespire, Roll20',
            category: 'Practical',
            status: 'Not started'
        },
        {
            id: 32,
            text: 'Generate town building names',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 33,
            text: 'Populate with NPCs',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 34,
            text: 'Printable Spell Scroll Cards',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 35,
            text: 'Reincarnation Roll Table',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 36,
            text: 'Build your own Rolltable',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 37,
            text: 'Random Encounter Roll Table',
            category: 'Tools',
            status: 'Not started'
        },
        {
            id: 38,
            text: 'Generating a backstory, with a map, reincarnation and NPC table',
            category: 'Story',
            status: 'Not started'
        },
        {
            id: 39,
            text: 'Integrating level up features with story',
            category: 'Story',
            status: 'Not started'
        },
        {
            id: 40,
            text: 'Mapping relationships',
            category: 'Story',
            status: 'Not started'
        },
        {
            id: 41,
            text: 'Session 0: Level 0 Concept',
            category: 'Story',
            status: 'Not started'
        },
        {
            id: 42,
            text: 'Create a Monster Block',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 43,
            text: 'Dropdown Monster Block Details',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 44,
            text: 'Set HP to Avg, Max Buttons',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 45,
            text: 'Set Alignment toggle',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 46,
            text: 'Quick Add +/- 1 CR button',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 47,
            text: 'Add Racial Traits button',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 48,
            text: 'Add a Spell or Feature button',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 49,
            text: 'Suggested Loot in dropdown',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 50,
            text: 'Optimal D.P.R. for Monsters',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 51,
            text: 'Rounds to win for each side with current state',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 52,
            text: 'Rounds to win with D.P.R. considering damage type and resistances',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 53,
            text: 'Apply damage and status to multiple',
            category: 'Encounter View',
            status: 'Not started'
        },
        {
            id: 54,
            text: 'Autogenerate relationship between NPC in same location',
            category: 'Tools',
            status: 'Not started'
        },
    ])

    // Set Status
    const setStatus = (id: number) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                if (task.status === 'Complete') {
                    return {...task, status: 'Not started'}
                } else if (task.status === 'In progress') {
                    return {...task, status: 'Complete'}
                } else {
                    return {...task, status: 'In progress'}
                }
            } else {
                return task
            }
        }));
    }

    // Add Task
    const addTask = (task: object) => {
        console.log(task)
        const id = Math.floor(Math.random() * 10000) + 100
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    categories.forEach((category, index) => {
        categoryLists.push(<TaskCategory key={index} category={category} tasks={tasks} onDelete={deleteTask} onSetStatus={setStatus} />)
    })

    return (
        <div id={styles.tasks_page}>
            <h1>Tasks</h1>
            <AddTask onAdd={addTask} />
            {categoryLists}
        </div>
    )
}