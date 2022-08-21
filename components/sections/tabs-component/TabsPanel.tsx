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

        <div className={ index === 0 ? styles.selected_tab : ''} >
          <button 
            type='button'
            onClick={() => changeIndex(0)}>
            Consultorio de Pediatría</button>
        </div>

        <div className={ index === 1 ? styles.selected_tab : ''} >
          <button 
            type='button'
            onClick={() => changeIndex(1)}>
            Golden Sport</button>
        </div>
        
        <div className={ index === 2 ? styles.selected_tab : ''} >
          <button 
            type='button'
            onClick={() => changeIndex(2)}>
            I. S. Tecnológico del Azuay</button>
        </div>
        </div>
        <div className={styles.tabs_content}>
          <TabContent 
            actualIndex={index} index={0} 
            title='Pediatría' fecha='2021' 
            items={[
            "Desarrollo de un sistema de registro de pacientes, antecedentes médicos, y de historias clínicas con tecnología Java",
            "Implementación de base de datos MySQL, backups."
            ]} />

          <TabContent 
            actualIndex={index} index={1} 
            title='Golden' fecha='2021' 
            items={[
            "Sistema de registro de patinadores, registro de competencias, registro de premios ganados por competidores, usando Java.",
            "Implementación de base de datos MySQL"
            ]}/>
          
          <TabContent 
            actualIndex={index} index={2} 
            title='Instituto Superior Tecnológico del Azuay (Prácticas)' fecha='2021 - Abril 2022' 
            items={[
            "Sistema web para el proceso de Prácticas Preprofesionales, con Angular.",
            "Desarrollo de API REST con Spring.",
            "Servicio de envío de correos electrónicos.",
            "Diseño e implementación de base de datos PostgreSQL.",
            "Implementación de Dockers."
            ]}/>
        </div>
      </div>
  )
}

type TabContentProps = {
  actualIndex: number,
  index: number,
  title: string,
  fecha: string,
  items: string[]
}

const TabContent = ({ actualIndex, index, title, fecha, items }: TabContentProps) => {
  return (
    <div className={ actualIndex === index ? styles.active_tab : styles.inactive_tab }>
      <h3>{ title }</h3>
      <code>{ fecha }</code>
      <ul>
        { items.map((item, index) => 
          <li key={index}>{ item }</li>) 
        }
      </ul>
    </div>
  )
}

