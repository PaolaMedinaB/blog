import React, {useState} from "react";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"

function Home(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
            <div className="bg-white p-3 rounded w-50 h-50">
                <h2>POSTS DASHBOARD</h2>
                
            
                        
                        <Link to="/posts" className="btn btn-default border w-300 bg-light rounded-0 text-decoration-none">New Post</Link>
                 
                
            
            </div>
        </div>
        
    )
}

export default Home