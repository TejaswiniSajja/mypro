import React, { useRef } from "react";

function LoginForm({ handleLogin }) {
  const collegeIdRef = useRef(null);
  const passwordRef = useRef(null);

  const formSubmitted = (event) => {
    event.preventDefault();
    if (collegeIdRef.current.value === passwordRef.current.value) {
      handleLogin();
    } else {
      console.log("Incorrect");
    }
    // Clear the input fields after form submission
    collegeIdRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className="card" style={{ height: "38vh", width: "350px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <p style={{ textAlign: "center", color: "#666" }}>Provide your details to login</p>
        <form onSubmit={formSubmitted} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="collegeId" style={{ fontWeight: "bold", color: "#333" }}>College Id</label>
          <input id="collegeId" type="text" placeholder="College Id" ref={collegeIdRef} style={{ border: "1px solid #ced4da", fontSize: "16px", color: "#333" }} />
          <label htmlFor="password" style={{ fontWeight: "bold", color: "#333" }}>Password</label>
          <input id="password" type="password" placeholder="Password" ref={passwordRef} style={{ border: "1px solid #ced4da", borderRadius: "4px", fontSize: "16px", color: "#333" }} />
          <button type="submit" style={{ border: "none", borderRadius: "4px", backgroundColor: "#000", color: "#fff", cursor: "pointer", fontSize: "16px" }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;