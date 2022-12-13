import styles from '../styles/Dev.module.scss'
import { useEffect } from 'react'
import { Client } from '@notionhq/client'

export default function Dev({ results }) {

    useEffect(() => {
        console.log(results);
    });

    const getTasksDisplay = () => {
        let jsx: JSX.Element[] = [];
        results.forEach((task) => {
            jsx.push(
                <div className="task" key={task.id}>
                    <div>{task.properties.Category.select.name}</div>
                    <div>{task.properties.Name.title[0].plain_text}</div>
                    <div>{task.properties.Status.status.name}</div>
                </div>
            )
        })
        return jsx;
    }

    return (
        <div>
            <h2 className={styles.output_heading}>Output:</h2>
            <code className={styles.output_code}>
                {getTasksDisplay()}
            </code>
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const tasksDB: string = process.env.NOTION_DB_TASKS ?? '';

    console.log(tasksDB);

    const response = await notion.databases.query({
        database_id: tasksDB,
    });

    console.log(response);

    return {
        props: {
            results: response.results,
        },
    };
}