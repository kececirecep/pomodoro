import React from 'react'

import { MdOutlineDashboardCustomize } from "react-icons/md";


const Header = () => {
  return (
    <div className='px-8 py-6 flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>Pomodoro Timer</h1>
        <div className='options'>
            <button className='flex items-center gap-2'><p className='text-2xl'><MdOutlineDashboardCustomize/></p>Customize</button>
        </div>
    </div>
  )
}

export default Header