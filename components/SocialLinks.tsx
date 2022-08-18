import {ReactNode} from "react";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb';
import {SocialLinkItem} from "./SocialLinkItem";
import styles from './SocialLinks.module.css';


type SocialItem = {
  link: string,
  icon: any
}

export const SocialLinks = () => {
  
  const socialLinks: SocialItem[]= [
    { link: 'https://github.com/Geomoon', icon: <TbBrandGithub /> },
    { link: 'https://github.com/Geomoon', icon: <TbBrandInstagram /> },
    { link: 'https://github.com/Geomoon', icon: <TbBrandLinkedin /> },
  ];

  const items = socialLinks.map( (item, index) => 
    <li key={index} ><SocialLinkItem icon={item.icon} link={item.link} /></li>
  )

  return (
    <div id={styles.social_links}>
      <ul>{ items }</ul>
    </div>
  )
}
