import styles from '../styles/Sessions.module.scss'

export default function Sessions() {
  return (
    <div className={styles.sessions_page}>
        <div className={styles.accordion}>
          {data.map((item, i) => (
            <div className={styles.accordion_item}>
              <h2 className={styles.item_title}>{item.title}</h2>
              <div className={styles.item_body}>{item.body}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

const data = [
  {
    title: 'Accordion Title',
    body: 'Accordion Body'
  },
  {
    title: 'Accordion 2 Title',
    body: 'Accordion 2 Body'
  }
]
