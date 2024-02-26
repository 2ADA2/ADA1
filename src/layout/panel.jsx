import { useState, useEffect } from "react"
import {Link, Outlet} from "react-router-dom";

export const Panel = () => {
    const [page, setPage] = useState(0);
    const url = "http://localhost:3000"

    function handleChange(e) {
        if(e.href) setPage(e.href);
        else if(e.parentNode.href) setPage(e.href);

    }

    useEffect(() => {
        setPage(window.location)
    })

    return (
        <aside className = "panel" onClick = {(e) => handleChange(e.target)}>
            <nav className = "panel-nav">
                <Link to="/statistycs" className = {(page == url + "/statistycs") ? "opened":""}><img src = "./icons8-react-native-50.png"></img>Statistycs</Link>
                <Link to="/rf-k8-info" className = {(page == url +"/rf-k8-info") ? "opened":""}><img src = "./icons8-react-native-50.png"></img>RF K8 Info</Link>
                <Link to="/module-list" className = {(page == url +"/module-list") ? "opened":""}><img src = "./icons8-react-native-50.png"></img>Module List</Link>
                <Link to="/json-model" className = {(page == url +"/json-model") ? "opened":""}><img src = "./icons8-react-native-50.png"></img>JSON Model</Link>
            </nav>
            <nav className = "other" >
                <Link to="/console" className = {(page == url + "/console") ? "opened":""}>
                    <p className = 'icon'>{"</>"}</p>
                    <p>console</p>
                </Link>

                <Link to="/updates" className = {(page == url + "/updates") ? "opened":""}>
                        <p className = "icon">&#11015;</p>
                        <p>updates</p>                 
                </Link>

            </nav>
        </aside>
    )
}