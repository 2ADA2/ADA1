import { makeAutoObservable } from "mobx"

class Store {
    module = (JSON.parse(localStorage.getItem("moduleInfo")) || {});
    constructor(){
        makeAutoObservable(this)
    }
    setModule(module){
        this.module = Object.assign({}, module);
        localStorage.setItem("moduleInfo", JSON.stringify(module));
    }
}

export default new Store()