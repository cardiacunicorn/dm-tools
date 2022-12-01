import { Client } from '@notionhq/client'
import { useEffect } from 'react';
import styles from '../styles/Locations.module.scss'

export default function Locations({ results }) {
    useEffect(() => {
        console.log(results);
    });

    const displayLocations = () => {
        let locations = [];
        results.forEach((location) => {
            locations.push(
                <div className={styles.location} key={location.id}>
                    <div className={styles.location_name}>{location.properties.Name.title[0].plain_text}</div>
                    {/* It's struggling with the below because there's no guarantee with any of these fields that it's populated */}
                    <div className={styles.location_tags}>{location.properties.Tags.multi_select[0]?.name}</div>
                </div>
            )
        });
        return locations;
    }

    return (
        <div>
            { displayLocations() }
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const locationsDB: string = process.env.NOTION_DB_LOCATIONS ?? '';

    const response = await notion.databases.query({
        database_id: locationsDB,
    });

    console.log(response);

    return {
        props: {
            results: response.results,
        },
    };
}