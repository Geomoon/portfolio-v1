import {TitleSection} from "./TitleSection"

type Props = {
  anchorId: string
}

export const Contact = ({ anchorId }: Props) => {
  return (
    <div className='card'>
      <a id={anchorId}></a>
      <TitleSection num="04." title="Contacto" />
    </div>
  )
}
