
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdModeEdit ,MdDeleteForever } from "react-icons/md";
import axios from 'axios';


const Blog = ({title,description,imageURL,userName,isUser,id}) => {

  const navigate = useNavigate();

  const handleEdit = (e) =>{
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () =>{
    const res = await axios.delete(`http://localhost:8000/api/blog/${id}`).catch(err =>console.log(err))
    const data = await res.data;
    return data;
  }

  const handleDelete = () =>{
    deleteRequest().then(() =>navigate("/")).then(()=>navigate("/blogs"));
  }

  return (

  <div className=' max-w-screen-2xl h-[calc(100%-56px)] mx-auto flex flex-col mt-8 md:mt-20 justify-center items-center   '>

<div className=' w-1/2 rounded-xl shadow-lg shadow-blue-950 mb-2'>
            
            <div className=' p-5  flex flex-col'>
              <div className=' flex items-center justify-between t mb-4 ml-2'>
                  <div className=' flex'>
                  <div className=' flex text-sm md:text-2xl h-5 md:h-8 w-5 md:w-8 border bg-gradient-to-b from-orange-500 to-red-500 rounded-full items-center justify-center font-semibold  capitalize text-white overflow-hidden'>{userName[0]}</div>
                  <div className=' ml-2 capitalize flex items-center text-sm md:text-2xl'>{userName}</div>
                  </div>
                  <div className=' flex mr-2 '>
                     {isUser && (
                        <div className=' flex gap-2'> 
                          <span onClick={handleEdit} className=' items-end'><MdModeEdit className=' hover:text-red-500 text-sm md:text-2xl ' /></span>
                          <span onClick={handleDelete} className=' items-end' ><MdDeleteForever className=' hover:text-red-800 text-sm md:text-2xl'/></span>
                        </div>
                      )}
                  </div>
                  
                  
                </div>
             
              <div  className=' rounded-xl overflow-hidden'>
                
                <img className=' h-[100%] w-[100%]' src={imageURL} alt='pic' />
                
                
              </div>
              <h5 className=' text-sm md:text-xl  mt-3 text-gray-200'>{title}</h5>
              <p className=' text-slate-500 text-sm md:text-lg mt-3 line-clamp-2'>{description}</p>
            </div>
            
          </div>
          
          
        
  </div>
  

  
  
  )
}

export default Blog