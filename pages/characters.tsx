import { Client } from '@notionhq/client'
import { useEffect } from 'react';
import styles from '../styles/Characters.module.scss'

export default function Characters({ results }) {
    useEffect(() => {
        console.log(results);
    });

    const displayCharacters = () => {
        let characters = [];
        results.forEach((character) => {
            characters.push(
                <div className={styles.character} key={character.id}>
                    <div className={styles.character_name}>{character.properties.Name.title[0].plain_text}</div>
                    {/* It's struggling with the below because there's no guarantee with any of these fields that it's populated */}
                    <div className={styles.character_tags}>{character.properties.Tags.multi_select[0]?.name}</div>
                </div>
            )
        });
        return characters;
    }

    return (
        <div>
            { displayCharacters() }
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const charactersDB: string = process.env.NOTION_DB_CHARACTERS ?? '';

    const response = await notion.databases.query({
        database_id: charactersDB,
    });

    console.log(response);

    return {
        props: {
            results: response.results,
        },
    };
}