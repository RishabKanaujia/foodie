import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
  <h2 className="text-2xl font-bold mb-4">Login</h2>
  <form className="flex flex-col max-w-md w-full p-5 border border-gray-300 rounded-lg mb-4">
    <input
      type="text"
      placeholder="Username"
    //   value={username}
    //   onChange={(e) => setUsername(e.target.value)}
      className="mb-3 p-2 border border-gray-300 rounded-md"
    />
    <input
      type="password"
      placeholder="Password"
    //   value={password}
    //   onChange={(e) => setPassword(e.target.value)}
      className="mb-3 p-2 border border-gray-300 rounded-md"
    />
    <button
      type="button"
    //   onClick={handleLogin}
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mb-3"
    >
      Login
    </button>
    <h4 className="mb-3 text-center">OR</h4>
    <button
      type="button"
    //   onClick={googleLogin}
      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
    >
      Sign In with Google
    </button>
  </form>
  {/* {showerror && <label className="text-red-500">Error Signing In</label>} */}
  <div>
    <label>Create New Account?</label>
    <Link href="/SignUp" className="text-blue-500 ml-1">Sign Up</Link>
  </div>
</div>

    </>
  )
}

export default Login