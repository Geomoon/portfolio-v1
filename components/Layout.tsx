import {Component, ReactNode} from "react";
import {EmailBar} from "./EmailBar";
import { Header } from "./Header";
import {SocialLinks} from "./SocialLinks";

type Props = {
  children: ReactNode 
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main>{ children }</main>
            <SocialLinks />
            <EmailBar />
        </>
    );
}
