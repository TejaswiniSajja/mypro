import { useContext } from "react";
import Navigation from "./Navigation";

function Profile(){
    const {globalUserObject, setGlobalUserObeject}=useContext(globalContext)
    const {globalIsLogin, setGlobalIsLogin} = useContext(globalContext)
    const logoutAction = () => { setGlobalIsLogin(false); }
    return(
        <div>
            <Navigation/>
            <div çlassName="container card"style={{display:'flex', flexDirection:'column', gap:'20px', width:'400px',padding:'20px'}}>
            {globalUserObject.college}
            <button className="btn btn-secondary" onClick={logoutAction}>Logout</button>    
            </div>
        </div>
    );
}
export default Profile;
