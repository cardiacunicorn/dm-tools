import { useEffect } from 'react'
import { Client, collectPaginatedAPI } from '@notionhq/client'

export default function NotionSessions({ page_results }) {
    useEffect(() => {
        console.log(page_results);
    });

    const getSessionsDisplay = () => {
        let jsx: JSX.Element[] = [];
        page_results.forEach((block) => {
            jsx.push(
                <div className="task" key={block.id}>
                    <div>{block.type}</div>
                    <div></div>
                </div>
            )
        })
        return jsx;
    }

    return (
        <div>
            {getSessionsDisplay()}
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const session: string = process.env.NOTION_SESSION_22 ?? '';
    // const response = await notion.pages.retrieve({ page_id: session });
    const page_response = await notion.blocks.children.list({
        block_id: session,
        page_size: 50,
    });

    // const child_response = await notion.blocks.children.list({
    //     block_id: "ac867d96-ecb7-43c4-9ac0-e84ae1d659f0",
    //     page_size: 50,
    // });

    // // Loop through each result of page_response
    // page_response.results.forEach((block) => {
    //     // if it is a parent, it needs to retrieve and store children
    //     // if (block.has_children) {
    //     //     let is_parent = true;
    //     // }
    // })

    // This helper function in the Notion API might help me collect the children
    // const blocks = collectPaginatedAPI(notion.blocks.children.list, {
    //     block_id: session,
    // })

    return {
        props: {
            page_results: page_response.results,
        },
    };
}