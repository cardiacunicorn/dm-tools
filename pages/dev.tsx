import styles from '../styles/Dev.module.scss'

export default function Dev({ }) {
    return (
        <div>
            <h2 className={styles.output_heading}>Output:</h2>
            <code className={styles.output_code}>Debugging goes here...</code>
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    // const articles = await res.json()

    return {
        props: {
            // articles
        }
    }
}