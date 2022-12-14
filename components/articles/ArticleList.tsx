import ArticleItem from './ArticleItem'
import styles from '../../styles/Articles.module.scss'

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList