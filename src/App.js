import { Layout } from "./layout/layout";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
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
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<Home/>}></Route>
          <Route path='/statistics' element = {<Statistics/>}></Route>
          <Route path='/rf-k8-channels' element = {<Channels/>}></Route>
          <Route path='/module-list' element = {<ModuleList/>}></Route>
          <Route path='/json-model' element = {<JsonModel/>}></Route>
          <Route path='/console' element = {<Console/>}></Route>
          <Route path='/updates' element = {<Updates/>}></Route>
          <Route path='/module-list/info' element = {<ModuleInfo/>}></Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
