import React from 'react'

const Footer = () => {
  return (
   <footer className='w-full border-t border-gray-700 mt-10 pt-9 py-6 text-center bg-[#080fic]'>
      <p className='text-gray-400 text-sm'>
        © {new Date().getFullYear()} Suraj Kumar Mahto. All rights reserved
        </p>

   </footer>
  )
}

export default Footer