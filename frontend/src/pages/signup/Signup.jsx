import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => [
    setInputs({ ...inputs, gender })
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);

    await signup(inputs);
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup to
            <span className='text-green-600'> Continue</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Fullname</span>
              </label>
              <input
                className="input input-bordered input-success w-full transition-all"
                type="text"
                placeholder="Enter Fullname"
                value={inputs.fullname}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                className="input input-bordered input-success w-full transition-all"
                type="text"
                placeholder="Enter Username"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                className="input input-bordered input-success w-full transition-all"
                type="password"
                placeholder="Enter Password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input
                className="input input-bordered input-success w-full transition-all"
                type="password"
                placeholder="Confirm Password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            {/* Gender checkbox */}
            <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

            <Link to="/login" className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Already have an account?</Link>

            {/* Btn */}
            <div>
              <button className='btn btn-block btn-sm mt-2'>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup