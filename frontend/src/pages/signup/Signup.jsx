import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup
            <span className='text-green-600'> ChatApp</span>
          </h1>

          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Fullname</span>
              </label>
              <input
                type="text"
                placeholder="Enter Fullname"
                className="input input-bordered input-success w-full transition-all"
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="input input-bordered input-success w-full transition-all"
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered input-success w-full transition-all"
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered input-success w-full transition-all"
              />
            </div>

            {/* Gender checkbox */}
            <GenderCheckbox/>

            <a href="#" className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Already have an account?</a>

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