import { Panel } from "./panel"
import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header><img src="./icons8-react-native-100.png"></img> <h1>React</h1></header>
            <main>
                <Panel></Panel>
                <section className = "page">
                  <Outlet/>  
                </section>
            </main>
        </>

    )
}