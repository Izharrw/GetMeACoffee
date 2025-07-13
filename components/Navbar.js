"use client"
import { useState } from "react"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useRef } from "react"

const Navbar = () => {
  const { data: session } = useSession()
  const [isClient, setIsClient] = useState(false);
  const [showdropdown, setShowdropdown] = useState(false)
  const showdropdownRef = useRef(null);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleClickOutside = (event) => {
      if (showdropdownRef.current && !showdropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClient]);

  return (

    <nav className='bg-[#422393] text-white flex flex-col md:flex-row justify-between px-4 md:h-16 items-center w-full gap-4 md:gap-0 py-4 md:py-0'>
      <div className='logo font-bold text-lg'><Link href="/">GetMeACoffee!</Link></div>

      <div className="relative">
        <div className="relative inline-block text-left" ref={showdropdownRef}>
        {session && <><button onClick={() => setShowdropdown(!showdropdown)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-35 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" onClick={() => setShowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} onClick={() => setShowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { signOut() }}>Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        </div>
        {!session &&
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            <Link href="/login">Login</Link>
          </button>}
      </div>
    </nav>
  )
}

export default Navbar
