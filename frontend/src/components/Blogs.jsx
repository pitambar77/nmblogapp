import axios from 'axios'
import React, { useEffect, useState } from 'react'
import bgVideo from '../assest/BgVideo.mp4'
import Testimonials from './Testimonials';
import Footer from './Footer';

const Blogs = () => {
 
  const [blogs, setBlogs] = useState();

  const sendRequest = async () =>{
    const res = await axios.get(`http://localhost:8000/api/blog`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then(data => setBlogs(data.blogs));
  },[]);
  // console.log(blogs)

  return (
    <div className=' max-w-screen-2xl mx-auto flex flex-col  justify-center w-full h-full '>
      <video className=' w-full h-96  object-cover' src={bgVideo} autoPlay loop muted/>
        <div className=' p-5 mb-10'>
          <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {blogs && 
              blogs.map((blog,index)=>(
              <div className=' rounded-xl shadow-lg shadow-blue-950  '>
            
                <div className=' p-5 flex flex-col'>
                  <div className=' flex items-center mb-4 ml-2'>
                    <div className=' flex h-8 w-8 border bg-gradient-to-b from-orange-500 to-red-500 rounded-full items-center justify-center font-semibold text-2xl capitalize text-white overflow-hidden'>{blog.user.name[0]}</div>
                      <span className=' ml-2 capitalize'>{blog.user.name}</span>
                    </div>
                  <div>
                </div>
    {/* {localStorage.getItem("userId")===blog.user._id && (
      <div display='flex'>
        <button onClick={handleEdit} ><MdModeEdit /></button>
        <button onClick={handleDelete} ><MdDeleteForever/></button>
      </div>
    )} */}
                <div className=' rounded-xl overflow-hidden'>
                
                  <img className=' h-[100%] w-[100%] hover:scale-110 duration-300' src={blog.image} alt='' /> 
                  
                  
                </div>
              
                <h5 className=' font-semibold text-sm md:text-xl ml-4 mt-4 text-cyan-500 line-clamp-1'>{blog.title}</h5>
                <p className=' text-slate-500 font-sans text-sm md:text-lg ml-4 mt-3 line-clamp-2'>{blog.description}</p>
              </div>
          </div>
          
          
        ))}
    </div>
    </div>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default Blogs