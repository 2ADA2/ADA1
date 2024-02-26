import { Layout } from "./layout/layout";
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/home";
import { Statistics } from "./pages/statistics";
import { Channels } from "./pages/channels";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<Home/>}></Route>
          <Route path='/statistics' element = {<Statistics/>}></Route>
          <Route path='/rf-k8-channels' element = {<Channels/>}></Route>
          <Route path='/module-list' element = {<div></div>}></Route>
          <Route path='/json-model' element = {<div></div>}></Route>
          <Route path='/console' element = {<div></div>}></Route>
          <Route path='/updates' element = {<div></div>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
