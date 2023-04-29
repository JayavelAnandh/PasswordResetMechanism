import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ResetPassword =()=>{
    let location = useLocation();
    let [password,setPassword] = useState("");
    let navigate = useNavigate();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            let res= await fetch("http://localhost:5000/updatePassword",{
                method:"PUT",
                headers:{
                    "content-Type": "application/json",
                },
                body:JSON.stringify({
                    gmail:location.state,
                    password:password
                })
            });
            let response = await res.json();
            swal("Password Updated Successfully","","success");
            navigate("/welcome");
        } catch (error) {
            console.log(error);
            swal({
                text:"Error Occuured",
                icon:"warning",
                dangerMode:true
              })
        }
    }
    return(
        <div>
            <div className="card">
                <h1>Create a new Password ...</h1>
                <label htmlFor="password">New Password</label>
                <form>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                    <button type="submit" onClick={(event)=>handleSubmit(event)}>Reset Password</button>
                </form>
            </div>
        </div>
    )
}
export default ResetPassword;