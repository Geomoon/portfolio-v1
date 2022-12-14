import {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';
import {TbBrandLinkedin, TbCopy, TbMail} from 'react-icons/tb'
import {toast, ToastContainer} from 'react-toastify';
import styles from './contactcard.module.css'

export const ContactCard = () => {

  const handleClickCopyEmail = () => {
    const email = 'lunacarlos.dev@gmail.com';

    navigator.clipboard?.writeText(email)
      .then(() => 
        toast.success('Email Copiado!', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          closeButton: false
        })
      );
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [])


  return (
    <div className={styles.contact_card}>
      <div className={styles.info_section}>
        <div className={styles.info_text}>
          <div id='email_text'>lunacarlos.dev@gmail.com</div>
        </div>
        { mobile ? null : (
        <div className={styles.copy_icons}>
          <button type='button' onClick={handleClickCopyEmail}> <TbCopy /></button>
        </div> )
        }
      </div>
      <div className={styles.separator}></div>
      <div className={styles.links_section}>
        <a className={ styles.mail_link } 
          href={'mailto:lunacarlos.dev@gmail.com'} 
          target="_blank" >Envíar un email <TbMail className={styles.icons}/></a>
        <a className={ styles.linkedin_link } 
          href={'https://www.linkedin.com/in/carlos-luna-dev/'} 
          target="_blank" >Visitar LinkedIn <TbBrandLinkedin className={styles.icons}/></a>
      </div>
      <ToastContainer />
    </div>
)
};
