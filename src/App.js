import { Layout } from "./layout/layout";
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/home";
import { Statistics } from "./pages/statistics";
import { Channels } from "./pages/channels";
import { ModuleList } from "./pages/modules";
import { ModuleInfo } from "./pages/moduleInfo";
import { JsonModel } from "./pages/jsonModel";
import { Console } from "./pages/console";
import { Updates } from "./pages/updates";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/index.html' element = {<Layout/>}>
          <Route index element = {<Home/>}></Route>
          <Route path='/index.html/statistics' element = {<Statistics/>}></Route>
          <Route path='/index.html/rf-k8-channels' element = {<Channels/>}></Route>
          <Route path='/index.html/module-list' element = {<ModuleList/>}></Route>
          <Route path='/index.html/json-model' element = {<JsonModel/>}></Route>
          <Route path='/index.html/console' element = {<Console/>}></Route>
          <Route path='/index.html/updates' element = {<Updates/>}></Route>
          <Route path='/index.html/module-list/info' element = {<ModuleInfo/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
