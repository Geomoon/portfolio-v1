import {useState} from 'react';
import styles from './tabscomponent.module.css';

export const TabsPanel = () => {
  
  const [index, setIndex] = useState<number>(0);

  function changeIndex(i: number) {
    setIndex(i);
  }

  return (
      <div className={styles.grid_content} >
        <div className={styles.tabs}>
          <button 
            onClick={() => changeIndex(0)}
            className={ index === 0 ? styles.selected_tab : 'none' } >
            Consultorio de Pediatría</button>
          <button onClick={() => changeIndex(1)}>Golden Sport</button>
          <button onClick={() => changeIndex(2)}>I. S. Tecnológico del Azuay</button>
        </div>
        <div className={styles.tabs_content}>
          <div className={ index === 0 ? styles.active_tab : styles.inactive_tab }>Pediatría</div>
          <div className={ index === 1 ? styles.active_tab : styles.inactive_tab }>Golden</div>
          <div className={ index === 2 ? styles.active_tab : styles.inactive_tab }>ISTA</div>
        </div>
      </div>
  )
}
