import {AboutMe} from "./sections/AboutMe"
import {Contact} from "./sections/Contact"
import {Experience} from "./sections/Experience"
import {Projects} from "./sections/Projects"
import {Welcome} from "./Welcome"

export const Content = () => {
  
  return (<>
    <section><Welcome /></section>
    <section><AboutMe anchorId="about" /></section>
    <section><Experience anchorId="experience"/></section>
    <section><Projects anchorId="projects"/></section>
    <section><Contact anchorId="contact"/></section>
    </>
  )
}
