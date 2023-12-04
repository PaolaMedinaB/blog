import React, {useState} from "react";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"


function Posts(){
    const [values,setValues] = useState({
        post_title:'' ,
        content:''
    })
    const navigate = useNavigate()
    const handleSubmit=(event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/posts', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/')
            } else {
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
            <div className="bg-white p-3 rounded w-50 h-50">
                <h2>CREATE A NEW POST </h2>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="post_title">POST TITLE</label>
                    <br></br>
                    <input type="textarea" name="post_title" placeholder="write the title of your post" id="post_title"//aqui vemos que funciona con el "name" 
                    onChange={e => setValues({...values, post_title: e.target.value})} className="form-control rounded-0"  /> 
                    <br></br> 
                
                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="content"><strong>POST CONTENT</strong></label>
                        <br></br>
                        <input type="textarea"  placeholder='content of the post' name='content'
                        onChange={e => setValues({...values, content: e.target.value})} className="form-control rounded-0" />
                        <br></br>
                        <br></br>
                        <button type='submit' className='btn btn-success w-100 rounded-0'>SUBMIT POST</button>
                        <Link to="/" className="btn btn-default border w-300 bg-light rounded-0 text-decoration-none">Home</Link>


                        
                    </div>
                    
                </form>
            
            </div>
        </div>

        
        
                
            
            
    )
}

export default Posts