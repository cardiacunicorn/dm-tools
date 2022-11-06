import {useRouter} from 'next/router'

const article = ({ article }) => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            <div>This is article {id}, as determined by querying 'useRouter'.</div>
            <div>This is article {article.id}, as determined by feeding the retreived article prop from getServerSideProps (at time of request) to the page function.</div>

            <h1>{article.title}</h1>
            <p>{article.body}</p>

            
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article