import {TitleSection} from "./TitleSection"
import styles from './experience.module.css';
import {TabsPanel} from "./tabs-component/TabsPanel";

export const Experience = () => {
  return (
    <div className='card'>
      <TitleSection num="02." title="Experiencia" />
      <div className={styles.content}>
        <TabsPanel />
      </div>
    </div>
  )
}
