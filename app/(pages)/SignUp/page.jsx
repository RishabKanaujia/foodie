import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
    <>
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
  {/* {userLoggedIn && <p>{userLoggedIn.displayname}</p>} */}
  <h2 className="text-2xl font-bold mb-4">SignUp</h2>
  <form className="flex flex-col max-w-md w-full p-5 border border-gray-300 rounded-lg mb-4">
    <input
      type="text"
      placeholder="Username"
      // value={username}
      // onChange={setUsername}
      className="mb-3 p-2 border border-gray-300 rounded-md"
    />
    <input
      type="password"
      placeholder="Password"
      // value={password}
      // onChange={setPassword}
      className="mb-3 p-2 border border-gray-300 rounded-md"
    />
    <button
      type="button"
      // onClick={handleSignup}
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mb-3"
    >
      SignUp
    </button>
    <h4 className="mb-3 text-center">OR</h4>
    <button
      type="button"
      // onClick={googleSignUp}
      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
    >
      Sign Up with Google
    </button>
  </form>
  {/* {showerror && <label className="text-red-500">Error Signing In</label>} */}
  <div className="mt-4">
    <label>Already have an account?</label>
    <Link href="/Login" className="text-blue-500 ml-1">Login</Link>
  </div>
</div>

    </>
  )
}

export default SignUp