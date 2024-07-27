import React, { useRef, useState } from "react";

function RegisterForm() {
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const branchRef = useRef(null);
    const yearRef = useRef(null);
    const [formData, setFormData] = useState(null);

    const formSubmitted = (event) => {
        event.preventDefault();
        const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
        const data = {
            collegeId: collegeIdRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            branch: branchRef.current.value,
            year: yearRef.current.value,
            gender: gender
        };
        setFormData(data);
        // Handle form submission logic here

        // Clear the input fields after form submission
        collegeIdRef.current.value = '';
        passwordRef.current.value = '';
        emailRef.current.value = '';
        branchRef.current.value = '';
        yearRef.current.value = '';

        // Optionally, clear the gender selection
        document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa'
        }}>
            <div className="card" style={{
                width: '350px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff'
            }}>
                <h2 style={{ textAlign: 'center' }}>Register</h2>
                <p style={{ textAlign: 'center', color: '#666' }}>Provide your details to login</p>
                <form onSubmit={formSubmitted} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label htmlFor="collegeId" style={{ fontWeight: 'bold', color: '#333' }}>College Id</label>
                    <input
                        id="collegeId"
                        type="text"
                        placeholder="College Id"
                        ref={collegeIdRef}
                        style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px', color: '#333' }} />
                    <label htmlFor="password" style={{ fontWeight: 'bold', color: '#333' }}>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px', color: '#333' }} />
                    <label htmlFor="email" style={{ fontWeight: 'bold', color: '#333' }}>Email address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email address"
                        ref={emailRef}
                        style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px', color: '#333' }} />
                    <label htmlFor="branch" style={{ fontWeight: 'bold', color: '#333' }}>Branch</label>
                    <select id="branch" ref={branchRef} style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '16px', color: '#333' }}>
                        <option value="">Select a branch</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="AI&ML">AI&ML</option>
                        <option value="CSE">CSE</option>
                        <option value="CS">CS</option>
                    </select>
                    <label htmlFor="year" style={{ fontWeight: 'bold', color: '#333' }}>Year</label>
                    <select
                        id="year"
                        ref={yearRef}
                        style={{
                            padding: '10px',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            fontSize: '16px',
                            color: '#333'
                        }}
                    >
                        <option value="">Select a year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>Gender</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <label>
                            <input type="radio" name="gender" value="male" /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" /> Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" /> Other
                        </label>
                    </div>
                    <button type="submit" style={{
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#000',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}>Register</button>
                </form>
                {formData && (
                    <div style={{ marginTop: '20px', color: '#333' }}>
                        <h3>Submitted Data:</h3>
                        <p><strong>College Id:</strong> {formData.collegeId}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Branch:</strong> {formData.branch}</p>
                        <p><strong>Year:</strong> {formData.year}</p>
                        <p><strong>Gender:</strong> {formData.gender}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterForm;