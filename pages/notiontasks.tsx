import { useEffect } from 'react'
import styles from '../styles/Tasks.module.scss'
import TaskCategory from '../components/tasks/TaskCategory'
import { Client } from '@notionhq/client'

export default function NotionTasks({ results }) {

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

    useEffect(() => {
        console.log(results);
    });

    const getTasksDisplay = () => {
        let jsx: JSX.Element[] = [];

        // Return Filtered Tasks
        jsx.push(<h2 className={styles.category_title}>High Priority</h2>)
        {results.filter(task => task.properties.Priority.select.name == "High").map(filteredTask => {
            jsx.push(
                <div className={styles.task} key={filteredTask.id}>
                    {/* <div>{filteredTask.properties.Status.status.name}</div> */}
                    <div>{filteredTask.properties.Name.title[0].plain_text}</div>
                    <div>{filteredTask.properties.Category.select.name}</div>
                </div>
            )
        })}

        // The below works, but should focus on High Priority any way

        // jsx.push(<h2>Medium Priority</h2>)
        // {results.filter(task => task.properties.Priority.select.name == "Medium").map(filteredTask => {
        //     jsx.push(
        //         <div className="task" key={filteredTask.id}>
        //             <div>{filteredTask.properties.Status.status.name}</div>
        //             <div>{filteredTask.properties.Name.title[0].plain_text}</div>
        //             <div>{filteredTask.properties.Category.select.name}</div>
        //         </div>
        //     )
        // })}

        // jsx.push(<h2>Low Priority</h2>)
        // {results.filter(task => task.properties.Priority.select.name == "Low").map(filteredTask => {
        //     jsx.push(
        //         <div className="task" key={filteredTask.id}>
        //             <div>{filteredTask.properties.Status.status.name}</div>
        //             <div>{filteredTask.properties.Name.title[0].plain_text}</div>
        //             <div>{filteredTask.properties.Category.select.name}</div>
        //         </div>
        //     )
        // })}

        // Return everything

        // results.forEach((task) => {
        //     jsx.push(
        //         <div className="task" key={task.id}>
        //             <div>{task.properties.Priority.select.name}</div>
        //             <div>{task.properties.Category.select.name}</div>
        //             <div>{task.properties.Name.title[0].plain_text}</div>
        //             <div>{task.properties.Status.status.name}</div>
        //         </div>
        //     )
        // })

        return jsx;
    }
    

    return (
        <div id={styles.tasks_page}>
            <h1>Notion Tasks</h1>
            <div className={styles.category}>
                <div className={styles.category_list}>
                    {getTasksDisplay()}
                </div>
            </div>
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const tasksDB: string = process.env.NOTION_DB_TASKS ?? '';

    const response = await notion.databases.query({
        database_id: tasksDB,
    });

    return {
        props: {
            results: response.results,
        },
    };
}