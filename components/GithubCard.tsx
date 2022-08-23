import Image from "next/image"
import styles from './githubcard.module.css'
import {TbBrandGithub} from "react-icons/tb"

type GitHubCardProps = {
  url: string,
  userImgURL: string,
  username: string
}

export const GitHubCard = ({url, userImgURL, username}: GitHubCardProps) => {
  return (
    <div className={ styles.github_card }>
      <div className={ styles.user_info }>
        <Image src={userImgURL} width={70} height={70} />
        <div>@{username}</div>
      </div>
      <a className={ styles.profile_link } href={url} target="_blank" >Más Proyectos en GitHub <TbBrandGithub /></a>
    </div>
  )
}
