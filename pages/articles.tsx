import ArticleList from '../components/articles/ArticleList'

export default function Articles({articles}) {
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