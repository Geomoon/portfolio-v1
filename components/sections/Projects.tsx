import {TbBrandGithub} from "react-icons/tb";
import {TitleSection} from "./TitleSection";
import styles from './projects.module.css';
import Image from "next/image";
import {GitHubCard} from "../GithubCard";

type Props = {
  anchorId: string
}

export const Projects = ({ anchorId }: Props) => {
  return (
    <div className='card'>
      <a id={anchorId}></a>
      <TitleSection num="02." title="Proyectos" />

      <ProjectWithImage 
        title={'eIntegral'}
        imageURL={'/images/eintegral-app.png'}
        githubLink={'https://github.com/Geomoon/eintegral'}
        techList={[ 'Python', 'Sympy', 'Matplotlib', 'Pyplot', 'Tkinter' ]}
        description={
        <p>Una calculadora básica desarrollada en <a href="https://www.python.org/">Python</a>, para resolver integrales definidas e indefinidas, mostrando el resultado de forma amigable usando lenguaje <a href="https://www.latex-project.org/">LaTeX</a>.
        </p>
        } />

      <ProjectWithImage
        reverse={true}
        title="Email Verification API"
        imageURL="/images/email-verification.png"
        techList={['Java', 'Quarkus', 'REST API', 'Email Service']}
        githubLink="https://github.com/Geomoon/email-verification-quarkus-api"
        description={
          <p>REST API desarrollada con <a href="https://quarkus.io/">Quarkus</a>, una API de registro de usuarios con email y contraseña, que permite verificar la cuenta de correo del usuario al enviar un email con un link de verificacion.</p>
        } />

        <ProjectWithImage
          title="Fiber Go API"
          imageURL="/images/fiber-go-api.png"
          techList={['Go', 'Fiber', 'REST API', 'Bcrypt']}
          githubLink="https://github.com/Geomoon/fiber-go-rest-api"
          description={
          <p>
          REST API desarrollada en <a href="https://go.dev/">Go</a> y <a href="https://docs.gofiber.io/">Fiber</a>, un ejemplo básico de la implementación de este lenguaje en el backend.
          </p>
          } />

          <ProjectWithImage
            reverse={true}
            title="Spring S3 Client API"
            imageURL="/images/s3-api.png"
            techList={['Java', 'REST API', 'Spring', 'Amazon S3']}
            githubLink="https://github.com/Geomoon/spring-s3-client-api"
            description={
            <p>
            Proyecto desarrollado en <a href="https://spring.io/projects/spring-boot">Spring Boot</a>, una REST API cliente de <a href="https://aws.amazon.com/es/s3/">Amazon S3</a>, que permite subir archivos a una instancia de almacenamiento S3 y poder consultarlos posteriormente de manera sencilla.
            </p>
            } />

            <GitHubCard url="https://github.com/Geomoon" userImgURL="/images/photo-color.webp" username="geovlunaa" />

    </div>
  )
}


type ProjectProps = {
  reverse?: boolean,
  title: string,
  description: JSX.Element,
  techList: string[],
  imageURL: string,
  githubLink: string,
}

const ProjectWithImage = ({ reverse, title, description, techList, imageURL, githubLink }: ProjectProps) => {
  return (
    <div className={ styles.grid_project }>
    <div className={ reverse ? styles.project_content_reverse : styles.project_content } >
      <h3 className={ styles.project_tile }>{ title }</h3>
      <div className={ styles.project_description }>
       { description }
      </div>
      <div className={ styles.tech_list } >
        <ul>
          { techList.map((item, index) => <li key={index}>{ item }</li>) }
        </ul>
      </div>
      <div className={styles.project_links} >
        <ul>
          <li>
            <a href={githubLink} 
              target="_blank" className="action_button" >
              { 'Ver en Github '}
              <TbBrandGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className={ reverse ? styles.project_image_reverse: styles.project_image } >
      <Image src={imageURL} layout="responsive" width={500} height={450}/>
    </div>
    </div>
  )
}


