import Image from "next/image";
import {TitleSection} from "./TitleSection"
import styles from './aboutme.module.css';

type Props = {
  anchorId: string
}

export const AboutMe = ({ anchorId }: Props) => {
  
  const techList = [
  'Java', 'TypeScript', 'Go', 'Spring', 'NodeJS', 'Docker'
  ];

  return (
    <div className='card' >
      <a id={anchorId}></a>
      <TitleSection num="01." title="Sobre Mí" />
      <div className={ styles.grid_content } >
        <div className={ styles.text_content }>
          <p>
Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>
          <div className={styles.tech_list}>
            <ul>
              { techList.map((item, index) => <li key={index}>{item}</li>) }
            </ul>
          </div>
        </div>
        <div id={styles.photo}>
          <Image src={'/images/photo-color.webp'} layout='responsive' width={300} height={300} 
            id={ styles.img } />
        </div>
      </div>
    </div>
  )
}
