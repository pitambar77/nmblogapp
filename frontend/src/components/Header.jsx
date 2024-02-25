import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store';
import { MenuItems } from './MenuItems';
import { MdMenu } from "react-icons/md";
const Header = () => {

    const dispath = useDispatch();

    const isLoggedIn = useSelector((state) =>state.isLoggedIn);

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);

  return (
   <nav className={`fixed w-full  left-0 top-0 z-[50]  bg-black/10 backdrop-blur-sm text-white flex items-center justify-between`}>
         <div className='mx-6'>
                    <h4 className='text-sm md:text-2xl uppercase font-bold'>NM<span className=' text-cyan-600'>BL</span>OG</h4>
                </div>

        <div className='flex items-center justify-between'>
           
            { isLoggedIn && <div className=' md:block hidden px-7 py-3 font-medium  rounded-bl-full' >
                <ul className=' flex items-center gap-1 px-4 py-2 text-lg' value={value}  onChange= {(e,val)=>setValue(val)}>
                        {
                            MenuItems?.map((menu, item) => (
                                <Link to={menu.url} key={item} className=' px-4 hover:text-cyan-600'>
                                    <a href={menu?.url}>{menu?.title}</a>
                                </Link>
                            ))
                        } 

                </ul>
            </div>}
            
        </div>

        <div >
                { !isLoggedIn &&  <div className='  justify-center items-center py-3 md:block hidden'>
                    <div className=' flex'>
                    <Link to="/auth" className=' text-white border-2 border-cyan-600 hover:text-green-700 font-medium px-3 mx-4 py-1 rounded-md' >Login</Link>
                    <Link to="/auth" className=' text-white border-2 border-cyan-600 hover:text-blue-600 font-medium px-3 mx-4 py-1 rounded-md' >Signup</Link>
                    </div>
                    
                </div> }
               { isLoggedIn && <Link 
                    onClick={()=>dispath(authAction.logout())} to="/auth" className=' text-white border-2 border-cyan-600 hover:text-red-500 font-medium px-3 mx-4 py-1 rounded-md  md:block hidden ' >Logout</Link>}
            </div>

            <div
                onClick={() => setOpen(!open)}
                className={` z-[999] ${open ? "text-gray-900 " : " text-white"} text-3xl md:hidden m-3 flex`}>
                <span className=' flex text-lg md:text-2xl '><MdMenu /></span>
            </div>

            <div className={` md:hidden text-black absolute w-2/3  px-7  font-medium bg-slate-300 top-0 mt-1  duration-300 ${open ? "right-0" : "right-[-75%]"} `}>
                    <ul className=' flex flex-col justify-center h-full gap-5 py-2 text-sm'>
                    {
                            MenuItems?.map((menu, item) => (
                                <Link to={menu.url} key={item} className=' px-4 hover:text-cyan-600'>
                                    <a href={menu?.url}>{menu?.title}</a>
                                </Link>
                            ))

                            
                    }
                        { !isLoggedIn && <Link to="/auth" className='px-6 hover:text-cyan-600 cursor-pointer' >Login/Signup</Link>}
                         { isLoggedIn && <Link 
                    onClick={()=>dispath(authAction.logout())} to="/auth" className=' px-6 hover:text-cyan-600 cursor-pointer ' >Logout</Link>}
                    </ul>
                 

                </div>



   </nav>
  )
}

export default Header;

  