import {TbBrandGithub} from "react-icons/tb";
import {TitleSection} from "./TitleSection";
import styles from './projects.module.css';
import Image from "next/image";

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
    <div className={ styles.grid_project }>
    <div className={ styles.project_content } >
      <h3 className={ styles.project_tile }>eIntegral</h3>
      <div className={ styles.project_description }>
        <p>
          Una calculadora básica desarrollada en <a href="https://www.python.org/">Python</a>, para resolver integrales definidas e indefinidas, mostrando el resultado de forma amigable usando lenguaje <a href="https://www.latex-project.org/">LaTeX</a>.
        </p>
      </div>
      <div className={ styles.tech_list } >
        <ul>
          <li>Python</li>
          <li>Sympy</li>
          <li>Matplotlib</li>
          <li>Pyplot</li>
          <li>Tkinter</li>
        </ul>
      </div>
      <div className={styles.project_links} >
        <ul>
          <li>
            <a href="https://github.com/Geomoon/eintegral" 
              target="_blank" style={{ backgroundColor: 'var(--primary-btn)', color: 'var(--color-light)' }}>
              { 'Ver en Github '}
              <TbBrandGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className={ styles.project_image } >
      <Image src={imageURL} layout="responsive" width={500} height={450}/>
    </div>
    </div>
  )
}

