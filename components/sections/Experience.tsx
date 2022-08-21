import {TitleSection} from "./TitleSection"
import styles from './experience.module.css';
import {TabsPanel} from "./tabs-component/TabsPanel";

type Props = {
  anchorId: string
}

export const Experience = ({ anchorId }: Props) => {
  return (
    <div className='card'>
      <a id={anchorId}></a>
      <TitleSection num="02." title="Experiencia" />
      <div className={styles.content}>
        <TabsPanel />
      </div>
    </div>
  )
}

