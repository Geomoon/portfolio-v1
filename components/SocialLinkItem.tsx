import Link from "next/link"

type Props = {
  link: string,
  icon: any
}

export const SocialLinkItem = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank" >
      { icon }
    </a>
  )
}
