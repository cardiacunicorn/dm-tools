import ArticleList from '../components/ArticleList'

export default function Dev({articles}) {
    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    )
}

// Adding data functions
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}