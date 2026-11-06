import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";


export default function Login (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [email, setEmail] =useState("");
    let[password, setPassword] = useState("");

    function loginUser(){
        if(email === "" || password ===""){
            alert("Please fill all fields");
            return
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(function(item){
            return item.email === email && item.password === password;
        });
        if(!user){
            alert("Invalid Email or Password");
            return;
        }
        localStorage.setItem("currentUser" , JSON.stringify(user));
        dispatch(login(user));
        alert("Login Successful");
        navigate("/");
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center">Login</h2>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="btn btn-warning w-100" onClick={loginUser}>Login</button>
                            <p className="text-center mt-3">Don't have an account
                            <Link to="/register" className="ms-2">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}