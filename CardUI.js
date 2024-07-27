import React from "react";
function CardUI(props) {
    return (
        <div>
            <img src="/JAVASCRIPT_Logo.jpeg" alt="Description of the img" width={200} 
            style={{border:'10px solid #FF0000',borderRadius:'50px'}} />
            <h1>{props.program}</h1>
            <h2>{props.col}</h2>
            {props.user && (
                <>
                 
                   <p>User Name: {props.user.name}</p>
                   <p>User branch: {props.user.branch}</p>
                   <p>User year: {props.user.year}</p>
                </>
            )}
            <p>User from Array: {props.userFromArray}</p>
        </div>
    );
}


export default CardUI;