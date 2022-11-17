import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "pages"
import 'styles/_common.scss'

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/*<Header/>*/}
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          {/*<Route path={"/latest"} element={<Latest/>}/>*/}
          {/*<Route path={"/search"} element={<Search/>}/>*/}
          {/*<Route path={"/search?/*"} element={<Search/>}/>*/}
          {/*<Route path={`/movies/:id`} element={<Detail/>}/>*/}
          {/*<Route path={`/about`} element={<About/>}/>*/}
        </Routes>
        {/*<Footer/>*/}
      </BrowserRouter>
  );
}

export default App;
