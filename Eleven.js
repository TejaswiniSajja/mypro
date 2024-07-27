import React, { useRef } from "react";

function Eleven() {
    const firstRef = useRef(null); // reference

    const formSubmitted = (event) => {
        event.preventDefault(); // prevent reload
        console.log("Form Submitted");
        console.log(firstRef.current.value); // Access the ref value correctly
        firstRef.current.value = ''; // clear value
    }

    return (
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Eleven;
