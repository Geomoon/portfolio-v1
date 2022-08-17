import Image from "next/image";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div id="header" className={styles.header} >
      <nav>
        <div id="logo" style={{backgroundColor: '#000000'}}>
          <Image src={'/images/logo.png'} width={44} height={44}/>
        </div>
        <div className={styles.sections}>
          <ol>
            <li><a href="/#about">Sobre mí</a></li>
            <li><a href="/#jobs">Experiencia</a></li>
            <li><a href="/#projects">Proyectos</a></li>
            <li><a href="/#contact">Contacto</a></li>
          </ol>
          <a href="/carlos-luna.pdf">PDF</a>
        </div>
      </nav>
    </div>
  )
}
