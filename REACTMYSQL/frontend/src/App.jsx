import Reactfrom  from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Register from "./Register";
import Login from "./Login" // this import the function login from the file login.
import Posts from "./Posts"



function App(){
    return (
        <><BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/register' element={<Register />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
                <Route path='/posts' element={<Posts />}> </Route>
            </Routes>
        </BrowserRouter><></></>
    )
}

export default App
