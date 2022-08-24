import {TbBrandLinkedin, TbCopy, TbMail} from 'react-icons/tb'
import styles from './contactcard.module.css'

export const ContactCard = () => {

  const handleClickCopyEmail = () => {
    const email = 'lunacarlos.dev@gmail.com';
    navigator.clipboard.writeText(email);
  }
  return (
    <div className={styles.contact_card}>
      <div className={styles.info_section}>
        <div className={styles.info_text}>
          <div>lunacarlos.dev@gmail.com</div>
        </div>
        <div className={styles.copy_icons}>
          <button type='button' onClick={() => handleClickCopyEmail()}> <TbCopy /></button>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.links_section}>
        <a className={ styles.mail_link } href={''} target="_blank" >Envíar un email <TbMail className={styles.icons}/></a>
        <a className={ styles.linkedin_link } href={''} target="_blank" >Visitar LinkedIn <TbBrandLinkedin className={styles.icons}/></a>
      </div>
    </div>
)
};
