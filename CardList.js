import React from "react";
import CardUI from "./CardUI";
function CardListUI() {
    const name = "ReactJs";
    const college = "SVECW";
    const userObject = { name: "name123", branch: "branchName", year: "4" };
    const users = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6"];
    
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <CardUI program={name} col={college} />
            {
                users.map((user, index) => (
                    <CardUI 
                        key={index}
                        program={name}
                        col={college}
                        user={userObject}
                        userFromArray={users} // Pass the individual user
                    />
                ))
            }
        </div>
    );
}
export default CardListUI;