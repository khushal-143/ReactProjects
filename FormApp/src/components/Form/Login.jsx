import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password:'',
  })
  function handleChange(e) {

    const { name, value } = e.target;
    setformData(prev => ({...prev, [name]: value}));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data ", formData)
    setformData({
      name: '',
      email: '',
      password: '',
    })
  }
  function handleReset() {
    setformData({
      name: '',
      email: '',
      password: '',
    })
  }
  return (
    <div className='formContainer'>
      <form action="submit" className='formSection'>
      <input type="text" value={formData.name} required name='name' placeholder='Enter Name' onChange={handleChange}   className="inputs" />
      <input type="email" value={formData.email} required name='email' placeholder='Enter Email' onChange={handleChange}   className="inputs" />
      <input type="password" value={formData.password} required name='password' placeholder='Enter Password' onChange={handleChange}   className="inputs" />
        <button className="btns" type='submit' onClick={handleSubmit}>Submit Form</button>
        <button className="btns" onClick={handleReset}>Reset Form</button>
      </form>
    </div>
  )
}

export default Login
