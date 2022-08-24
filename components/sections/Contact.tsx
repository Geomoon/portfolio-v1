import {ContactCard} from "../ContactCard"
import {TitleSection} from "./TitleSection"

type Props = {
  anchorId: string
}

export const Contact = ({ anchorId }: Props) => {
  return (
    <div className='card'>
      <a id={anchorId}></a>
      <TitleSection num="03." title="Contacto" />
      <ContactCard />
    </div>
  )
}
