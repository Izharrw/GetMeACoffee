import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#422393] text-white flex md:flex-row flex-col gap-5 md:gap-0 py-3 md:py-0 justify-between px-2 md:px-6 items-center md:h-32'>
      <div className="item space-y-4 text-sm">
        <div>
      <p className=''>Copyright &copy; Get Me a Coffee | All rights reserved!</p>
      <p className=' text-gray-300 md:text-start text-center'>Made by Izhar Warsi </p>
        </div>
      <ul className='flex justify-center gap-4 md:flex-row flex-col items-center'>
        <Link href="/about"className='hover:underline cursor-pointer hover:text-gray-200'>About Us</Link>
        <Link href="/contact"className='hover:underline cursor-pointer hover:text-gray-200'>Contact Us</Link>
        <Link href="/privacy-policy"className='hover:underline cursor-pointer hover:text-gray-200'>Privacy Policy</Link>
        <Link href="/terms&service"className='hover:underline cursor-pointer hover:text-gray-200'>Terms of Service</Link>
        <Link href="/refund-policie"className='hover:underline cursor-pointer hover:text-gray-200'>Cancellation/Refund Policies</Link>
      </ul>
      </div>
      <div className="links flex flex-col items-center justify-center gap-4">
        <p className='text-gray-300'>Follow us on:</p>
        <div className="flex justify-center items-center gap-4">
        <div>
          <Link href="https://github.com/Izharrw" target="_blank">
          <div className='flex items-center gap-2 hover:bg-[#341b74] cursor-pointer p-2 rounded-full border'>
          <Image className='invert' width={24} src="/github.svg" alt="" />
          <span>GitHub</span>
          </div>
          </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/izharwarsi/" target="_blank">
            <div className='flex items-center gap-2 hover:bg-[#341b74] cursor-pointer p-2 rounded-full border'>
          <Image className='invert' width={24} src="/linkedin.svg" alt="" />
          <span>LinkedIn</span>
          </div>
          </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
