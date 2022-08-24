import {AboutMe} from "./sections/AboutMe"
import {Contact} from "./sections/Contact"
import {Projects} from "./sections/Projects"
import {Welcome} from "./Welcome"
import 'react-toastify/dist/ReactToastify.css';

export const Content = () => {
  
  return (<>
    <section><Welcome /></section>
    <section className="section_content" ><AboutMe anchorId="about" /></section>
    <section className="section_content"><Projects anchorId="projects"/></section>
    <section className="section_content"><Contact anchorId="contact"/></section>
    </>
  )
}
