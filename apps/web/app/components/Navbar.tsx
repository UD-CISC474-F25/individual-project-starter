import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
            <a href="">
                <h3 className='w-28 cursor-pointer mr-14'>Codify</h3>
            </a>
            <ul>
                <li><a href='#top'>Home</a></li>
                <li><a href='about'>About</a></li>
                <li><a href='signup'>Sign Up</a></li>
                <li><a href='login'>Login</a></li>
            </ul>
            <div>
            </div>

        </nav>
    </>
  )
}

export default Navbar