"use client"
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [name, setName] = useState();
  const [mail, setmail] = useState();
  const [password, setPassword] = useState();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post('', { name, mail, password })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <>
      <main>
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
              <a href="/">
                <h3 className="text-4xl font-bold text-purple-600">
                  Register !
                </h3>
              </a>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
              <form onSubmit={handelSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Name
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => { setName(e.target.value) }}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => { setmail(e.target.value) }}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Password
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => { setPassword(e.target.value) }}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                </div>
                <div className="flex items-center justify-end mt-4">
                  <a
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                    href="/login"
                  >
                    Already registered?
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div >


      </main >
    </>
  )
}
