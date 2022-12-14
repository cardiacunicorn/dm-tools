import styles from '../styles/Sessions.module.scss'
import Accordion from '../components/Accordion';
import { accordionData } from '../data/sessions/session-23';

export default function Sessions() {

  return (
    <div className={styles.sessions_page}>
      <textarea className={styles.session_editor}>

      </textarea>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}
