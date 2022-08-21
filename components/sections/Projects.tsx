import Image from "next/image"
import {TbBrandGithub} from "react-icons/tb"
import {TitleSection} from "./TitleSection"

type Props = {
  anchorId: string
}

export const Projects = ({ anchorId }: Props) => {
  return (
    <div className='card'>
      <a id={anchorId}></a>
      <TitleSection num="03." title="Proyectos" />
      <ProjectWithImage imageURL={'/images/eintegral-app.png'} />
    </div>
  )
}

type ImageProjectProps = {
  imageURL: string
}

const ProjectWithImage = ({ imageURL }: ImageProjectProps) => {
  return (
    <>
    <div>
    <h3>Hello</h3>
    <div>
      <p>
      Una calculadora básica para resolver integrales definidas e indefinidas, mostrando el resultado de forma amigable usando lenguaje <a href="https://www.latex-project.org/">LaTeX</a>.
      </p>
    </div>
    <div>
      <ul>
        <li>Python</li>
        <li>Sympy</li>
        <li>Matplotlib</li>
        <li>Pyplot</li>
        <li>Tkinter</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <a href="http://github.com" target="_blank">
            <TbBrandGithub />
          </a>
        </li>
      </ul>
    </div>
    </div>

    <div>
      <img src={imageURL} width={100} height={100} />
    </div>
    </>
  )
}

