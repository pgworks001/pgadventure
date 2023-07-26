import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
           <h3 className='text-center'>Create New Account</h3>
           <div className='mb-2'>
            <label htmlFor='fname'>Email</label>
            <input type='text' className='form-control'  placeholder='Enter First Name' />
           </div>
           <div className='mb-2'>
            <label htmlFor='lname'>Email</label>
            <input type='text' className='form-control'  placeholder='Enter Last Name' />
           </div>
           <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control'  placeholder='Enter email' />
           </div>
           <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control'  placeholder='Enter Password' />

            <div className='d-grid'>
                <button className='btn btn-primary'>Sign Up</button>
            </div>
            <p className='text-end mt-2'>
                Already Registered <Link to ='/login' className='ms-2'>Login</Link>
            </p>
           </div>
        </form>
       </div>
    </div>
  )
}

export default SignUp
