import styles from './titlesection.module.css';

type Props = {
  num: string,
  title: string
}

export const TitleSection = ({ num, title }: Props) => {

  return (
    <h2 className={ styles.title_section }>
      <span>{num}</span>
      { title }
    </h2>
  )
}
