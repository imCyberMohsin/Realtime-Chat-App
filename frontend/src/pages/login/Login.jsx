import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(username," ", password);

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({username, password});
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login to
            <span className='text-green-600'> Continue</span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Input 1 */}
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="input input-bordered input-success w-full transition-all"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Input 2 */}
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered input-success w-full transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Don't have an account */}
            <Link to="/signup" className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Don't have an account?</Link>

            {/* Btn */}
            <div>
              <button className='btn btn-block btn-sm mt-2'
                disabled={loading}
              >
                {loading ? <span className='loading loading-spinner'></span> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login