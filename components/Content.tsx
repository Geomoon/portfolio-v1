import {AboutMe} from "./sections/AboutMe"
import {Contact} from "./sections/Contact"
import {Experience} from "./sections/Experience"
import {Projects} from "./sections/Projects"
import {Welcome} from "./Welcome"

export const Content = () => {
  
  return (<>
    <section><Welcome /></section>
    <section><AboutMe /></section>
    <section><Experience /></section>
    <section><Projects /></section>
    <section><Contact /></section>
    </>
  )
}
