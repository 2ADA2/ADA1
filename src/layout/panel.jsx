import { useState, useEffect } from "react"
import {Link, Outlet} from "react-router-dom";

const src = "https://i.ibb.co/NrRhzPQ/icons8-react-native-50.png"

export const Panel = () => {
    const [page, setPage] = useState(window.location.href);

    function handleChange(e) {
        if(e.href) setPage(e.href);
        else if(e.parentNode.href) setPage(e.parentNode.href);
        

    }

    useEffect(() => {
        setPage(window.location.href);
        console.log(page);
    })

    return (
        <aside className = "panel" onClick = {(e) => handleChange(e.target)}>
            <nav className = "panel-nav">
                <Link to="/index.html/statistics" className = {(page.indexOf("statistics") + 1) ? "opened":""}><img src = {src}></img>Statistics</Link>
                <Link to="/index.html/rf-k8-channels" className = {(page.indexOf("rf-k8-channels")+1) ? "opened":""}><img src = {src}></img>RF K8 Channels</Link>
                <Link to="/index.html/module-list" className = {(page.indexOf("module-list")+1) ? "opened":""}><img src = {src}></img>Module List</Link>
                <Link to="/index.html/json-model" className = {(page.indexOf("json-model")+1) ? "opened":""}><img src = {src}></img>JSON Model</Link>
            </nav>
            <nav className = "other" >
                <Link to="/index.html/console" className = {(page.indexOf("console")+1) ? "opened":""}>
                    <p className = 'icon'>{"</>"}</p>
                    <p>console</p>
                </Link>

                <Link to="/index.html/updates" className = {(page.indexOf("updates")+1) ? "opened":""}>
                        <p className = "icon">&#11015;</p>
                        <p>updates</p>                 
                </Link>

            </nav>
        </aside>
    )
}