import React, { useState } from "react";

function Ten() {
    const [review, setReview] = useState('');
    const [reviewToDisplay, setDisplay] = useState('');
    const inputValueChange = (event) => {
       // console.log("Input changed");
        console.log(event.target.value);
        setReview(event.target.value);
    }

    const addReview = () => {
        console.log("Adding Review.....");
        setDisplay(review);
    }

    return (
        <div>
            <input type="text" placeholder="Enter the review" onChange={inputValueChange}/>
            <button className="btn btn-dark btn-sm" onClick={addReview}>Add review</button>
            <p> {reviewToDisplay} </p>
        </div>
    );
}

export default Ten;
