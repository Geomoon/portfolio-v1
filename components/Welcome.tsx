import styles from './Welcome.module.css';

export const Welcome = () => {
  return (<div className='card' >
    <h4>Hola, mi nombre es</h4>
    <h1>Carlos Luna.</h1>
    <h2>Software Developer</h2>
    <p className={styles.paragraph} >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at</p>
    </div>
  )
}
