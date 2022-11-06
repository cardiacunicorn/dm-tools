import styles from '../styles/Article.module.scss'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return (
    <div className={styles.article}>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <h3>{article.title} &rarr;</h3>
      </Link>
      <p>{article.body}</p>
    </div>
  )
}

export default ArticleItem