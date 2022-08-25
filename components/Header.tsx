import Image from "next/image";
import styles from './Header.module.css';
import {TbDownload, TbMenu2} from 'react-icons/tb';
import Link from "next/link";
import {useState} from "react";

export const Header = () => {
  
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.header} >
        <div id="logo" > 
        <a href={'/'}>
          <Image src={'/images/logo.png'} width={44} height={44} id={styles.logo_img} />
        </a>
        </div>
      <nav className={ showNav ? styles.visible : styles.hidden }>
        <div className={styles.sections}>
          <ol>
            <li><Link href="/#about">Sobre mí</Link></li>
            <li><Link href="/#projects">Proyectos</Link></li>
            <li><Link href="/#contact">Contacto</Link></li>
          </ol>
          <a id={styles.preview_pdf} href="/carlos-luna.pdf" target={"_blank"}><TbDownload /> PDF</a>
        </div>
      </nav>
      <button type="button" id={styles.menu_button} onClick={toggleNav} ><TbMenu2 /></button>
    </div>
  )
}
