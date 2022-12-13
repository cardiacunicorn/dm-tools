import styles from '../styles/Sessions.module.scss'
import downChevron from '../assets/icons/directional/chevron-down-thick.png'

export default function Sessions() {

  console.log(downChevron)

  return (
    <div className={styles.sessions_page}>
        <div className={styles.accordion}>
          {data.map((item, i) => (
            <div className={styles.accordion_item}>
              <div className={styles.item_title}>
                <h2>{item.title}</h2>
                <img src={downChevron.src} alt="Open/Close" />
              </div>
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
