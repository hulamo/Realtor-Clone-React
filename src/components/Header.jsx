import { useLocation } from 'react-router'
import React from 'react'
import logo from "./logo.svg"

export default function Header() {

const location = useLocation()

function pathMathRoute(route){
    if(route===location.pathname)
    {return true}
}
  return (
    <div className='bg-white birder-b shadow-sm sticky top-0 z-50'>
    <header className='flex justify-between items-center'>
    <div>

<img src={logo} alt="logo" className='h-5 cursor-pointer px-3 max-w-6xl mx-auto'></img>

    </div>
   <div>
<ul className='flex space-x-10 '>
<li className={`py-3 text-sm font-semibold ${!pathMathRoute("/") && " text-gray-400 border-b-transparent"} border-b-[3px]  ${pathMathRoute("/") && " border-b-red-600  text-black"}` }>Home</li>
<li className={`py-3 text-sm font-semibold ${!pathMathRoute("/offers") && " text-gray-400 border-b-transparent"} border-b-[3px]  ${pathMathRoute("/offers") && " border-b-red-600  text-black"}` }>Offers</li>
<li className={`py-3 text-sm font-semibold ${!pathMathRoute("/sign-in") && " text-gray-400 border-b-transparent"} border-b-[3px]  ${pathMathRoute("/sign-in") && " border-b-red-600  text-black"}` }>Sign In</li>
<li className={`py-3 text-sm font-semibold ${!pathMathRoute("/sign-up") && " text-gray-400 border-b-transparent"} border-b-[3px]  ${pathMathRoute("/sign-up") && " border-b-red-600  text-black"}` }>Sign Up</li>

</ul>

   </div>
    </header>
    </div>
  )
}

