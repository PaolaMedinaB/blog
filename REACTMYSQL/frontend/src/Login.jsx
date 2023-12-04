import React, {useState} from "react";
import { Link,useNavigate } from 'react-router-dom' // this make the links ready to operate and navegate    The useNavigate hook returns a function that lets you navigate programmatically in the browser in response to user interactions or effects
import axios from "axios" //


function Login(){
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit=(event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/login', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/')
            } else {
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
            <div className="bg-white p-3 rounded w-50 h-50">
                <h2>Sign-In</h2>
                {/* <form onSubmit={handleSubmit}> esto lo escribimos cuando queremos desencadenar una accion, en este caso "onChange"  */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={e => setValues({...values, email: e.target.value})} className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={e => setValues({...values, password: e.target.value})} className="form-control rounded-0" />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/register" className="btn btn-default border w-300 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form> 
            </div>
        </div>
    )
}

export default Login