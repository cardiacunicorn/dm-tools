import ArticleItem from './ArticleItem'
import styles from '../../styles/Article.module.scss'
import { Client } from '@notionhq/client'

// const notion = new Client({
//   auth: "secret_5BNKwFnzVRRecfMzzwc0CrXih9fkLa0dPm7IOXyRBuE",
// });

// (async () => {
//   const listUsersResponse = await notion.users.list({})
// })()

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      <div>
        Output should go here
      </div>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList