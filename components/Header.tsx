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
            <li><Link href="/#about">Sobre mí</Link></li>
            <li><Link href="/#jobs">Experiencia</Link></li>
            <li><Link href="/#projects">Proyectos</Link></li>
            <li><Link href="/#contact">Contacto</Link></li>
          </ol>
          <a id={styles.preview_pdf} href="/carlos-luna.pdf" target={"_blank"}><TbDownload /> PDF</a>
        </div>
      </nav>
    </div>
  )
}
