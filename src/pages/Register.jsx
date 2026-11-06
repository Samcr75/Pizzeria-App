import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function registerUser(){
        if(name === "" || email === "" || password === "" || confirmPassword ===""){
            alert("Please fill all fields");
            return;
        }
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(function(item) {
            return item.email ===email;        });
        if(user){
            alert("Email already registered");
            return;
        }
        let newUser ={
            name:name,
            email:email,
            password:password
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setName("");
        setEmail("");
        setPassword("");
        alert("Registration Successful");
        navigate("/login");
    }
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4"> Register</h2>
                            <div className="mb-3">
                                <label className="form-label"> Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>

                            <button className="btn btn-warning w-100" onClick={registerUser}>Register</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}