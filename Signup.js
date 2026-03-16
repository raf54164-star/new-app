import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    const handleSignup=()=>{
        if(name ===""||password===""||email===""){
            alert("Please fill all fields");
            return;
        }
        const user = {
            name:name,
            email:email,
            password:password
        };
        localStorage.setItem("user",
            JSON.stringify(user)
        );
        alert("Signup Successful!");
        navigate("/mains");
    };
    return(
        <div className="card2" style={{ width: "24rem", margin: "100px auto", boxSizing: "border-box", padding: "10px" }}>
            <h2>Signup</h2>
           
            <input 
                type="text"
                placeholder="Enter username" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                 style={{ width: "70%", alignItems: "center", padding: "8px", marginBottom: "10px" }}
            />
            <br/><br/>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "70%", alignItems: "center", padding: "8px", marginBottom: "10px" }}
            />
            <br/><br/>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "70%", alignItems: "center", padding: "8px", marginBottom: "10px" }}
            />
            <br/><br/>
            <div style={{fontSize: "14px", marginBottom: "10px", borderRadius: "4px", padding: "8px" }}>
            <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
}
export default Signup;

