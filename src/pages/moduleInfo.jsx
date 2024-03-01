import store from "../store/store"
import "../styles/moduleInfo.css";

const createState = (module) => {
    let stats = [];
    for (let i in module){
        if(i === "specifications") {
            let specifications = [];
            for (let j in module[i]){
                specifications.push(
                <div className = "specifications">
                    <h3>{j.replace("_", " ")}:</h3><span>{module[i][j]}</span>
                    
                </div>)
            }
            stats.push(<section>{specifications}</section>);
        } else if (i === "features"){
            let features =  module[i].map(e =><li>{e}</li>)
            stats.push(<div className = "features">
                <ul><h3>features:</h3>{features}</ul>
            </div>)
        } else{
            stats.push(
            <div className="stat">
                <h3>{i.replace("_", " ")}: </h3><span>{module[i]}</span>
            </div>)
        }
    }
    return stats.slice(0, stats.length-5)
}

export const ModuleInfo = () => {
    const module = store.module;
    const state = createState(module);
    return (
        <div className="module-container">
            <div className="container module-container">
                <h2>Specifications <span>Module {store.module.serial_number}</span></h2>
                <h3>All technical specifications of the module:</h3>
                <div className = "module-info">
                    {state.slice(0,state.length-2)}
                    <div className="other">
                    {state.slice(state.length-2,state.length)}
                    </div>
                </div>            
            </div>
        </div>


    )
}