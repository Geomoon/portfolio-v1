import Image from "next/image";
import styles from './Header.module.css';
import {TbDownload} from 'react-icons/tb';
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header} >
      <nav>
        <div id="logo" > 
        <Link href={'/'}>
          <Image src={'/images/logo.png'} width={44} height={44} id={styles.logo_img} />
        </Link>
        </div>
        <div className={styles.sections}>
          <ol>
            <li><a href="/#about">Sobre mí</a></li>
            <li><a href="/#jobs">Experiencia</a></li>
            <li><a href="/#projects">Proyectos</a></li>
            <li><a href="/#contact">Contacto</a></li>
          </ol>
          <a id={styles.preview_pdf} href="/carlos-luna.pdf"><TbDownload /> PDF</a>
        </div>
      </nav>
    </div>
  )
}
