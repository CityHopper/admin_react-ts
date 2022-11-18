import React from 'react'
import Box from "@mui/material/Box"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from 'pages'
import {SettingSystem} from "pages"
import {DrawerHeader} from "./MuiNav";

export default function Content() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader/>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/*<Header/>*/}
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/system"} element={<SettingSystem/>}/>
                    {/*<Route path={"/search"} element={<Search/>}/>*/}
                    {/*<Route path={"/search?/*"} element={<Search/>}/>*/}
                    {/*<Route path={`/movies/:id`} element={<Detail/>}/>*/}
                    {/*<Route path={`/about`} element={<About/>}/>*/}
                </Routes>
                {/*<Footer/>*/}
            </BrowserRouter>
        </Box>

    );
}

