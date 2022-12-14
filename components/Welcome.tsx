import Link from 'next/link';
import {useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import styles from './Welcome.module.css';

export const Welcome = () => {
  
    const showToast = () =>
    toast('Bienvenido/a!', {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      closeButton: false
    });

    useEffect(() => {
      showToast();
    }, []);
  
  return (
  <div className='card' >
    <h4>Hola, mi nombre es</h4>
    <h1>Carlos Luna.</h1>
    <h1 className='fade_text'>Software Developer</h1>
    <p className={styles.paragraph} >
    Soy un desarrollador de software en continuo aprendizaje
    </p>
      <Link href={'/#about'} >
        <a className='action_button'>
          Check out this!
        </a>
      </Link>
      <ToastContainer />
   </div>
  )
}
