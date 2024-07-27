import { Link } from "react-router-dom";
//import { UserContext } from "./Home";
import { useGlobalContext } from "./GlobalContext";
import React from "react";

function Navigation(){
    const {state} = useGlobalContext();
    return(
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', background:'#e5e5e5',padding:'20'}}>
            <div style={{display:'flex', gap:'10px', cursor:'pointer'}}>
                <Link to="/">Home</Link>
                <Link to="/Product">Product List</Link>
            </div>
            <div style={{display:'flex', gap:'10px', cursor:'pointer'}}>
                <button><Link to="/">Cart({state.globalCount})</Link></button>
                <button><Link to="/product">Profile</Link></button>
            </div>
        </div>
    );
}
export default Navigation;