// NOTE: This Grid Library could be exactly what I need for the customisable Character view or the DM Screen:
// https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html

/*
  Min/Max Width/Height would work well for certain elements: https://react-grid-layout.github.io/react-grid-layout/examples/9-min-max-wh.html
  Bounding will keep players features bumping into different sheets: https://react-grid-layout.github.io/react-grid-layout/examples/16-bounded.html
*/

// At the moment following along with this article: https://isamatov.com/react-grid-layout-tutorial/

import GridLayout from 'react-grid-layout'
import styles from '../styles/DMScreen.module.scss'

const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

export default function DMScreen() {
  return (
    <div className={styles.page}>
        <h1>DM Screen</h1>
        <GridLayout layout={layout} cols={5} rowHeight={300} width={1000} compactType={'horizontal'}>
            <div key="blue-eyes-dragon" className={styles.grid_item}>
                <div className={styles.grid_item_content}>Blue Eyes Dragon</div>
            </div>
            <div key="dark-magician" className={styles.grid_item}>
                <div className={styles.grid_item_content}>Dark Magician</div>
            </div>
            <div key="kuriboh" className={styles.grid_item}>
                <div className={styles.grid_item_content}>Kuriboh</div>
            </div>
            <div key="spell-caster" className={styles.grid_item}>
                <div className={styles.grid_item_content}>Spell Caster</div>
            </div>
            <div key="summoned-skull" className={styles.grid_item}>
                <div className={styles.grid_item_content}>Summoned Skull</div>
            </div>
        </GridLayout>
    </div>
  )
}
