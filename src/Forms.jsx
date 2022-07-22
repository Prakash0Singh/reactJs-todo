import React from 'react'
import { useState } from 'react'
import "./Form.css"

const Forms = () => {
  const[inputs,setInputs]=useState({ });
  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }
  return (
    <>
        <form onSubmit={handleSubmit} id="formData">
        <h2>Form In React JS</h2>
            <label >Enter Your First Name = </label>
            <input type="text" name="FirstName" value={inputs.FirstName || ""} onChange={handleChange} className="Name" placeholder='First Name' /><br/>
            <label>Enter Your Last Name = </label>
            <input type="text" name="LastName" value={inputs.LastName || ""} onChange={handleChange} className="Name" placeholder='Last Name' /><br/>
            <label>Enter Your E-mail = </label>
            <input type="email" name="Email" value={inputs.Email || ""} onChange={handleChange} className="Name" placeholder='E-mail' /><br/>
            <label>Enter Your Phone Nuumber = </label>
            <input type="number" name="Phone" value={inputs.Phone || ""} onChange={handleChange} className="Name" placeholder='Mobile Number' /><br/>
            <label>Enter Your Date of Birth = </label>
            <input type="date" name="DOB" value={inputs.DOB || ""} onChange={handleChange} className="Name" /><br/>
            <label> Select Your Course = </label>
            <select className='Name'name="Course" value={inputs.Course ||""} onChange={handleChange}>
              <option value="BCA" >BCA</option>
              <option value="MCA">MCA</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
              <option value="B.TEC">B.TEC</option>
              <option value="M.TEC">M.TEC</option>
              
            </select><br/>
            <input type="submit" value="Submit" id='submitButton'/><br/>
        </form>
    </>
  )
}

export default Forms

// const getdata =() =>{
//   console.log("bababababbababba")
// }
