import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const BlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();

  const id = useParams().id;
  // console.log(id);

  const [inputs, setInputs] = useState();

 

  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const fetchDetails = async () =>{
    const res = await axios.get(`http://localhost:8000/api/blog/${id}`).catch(err =>console.log(err))
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    fetchDetails().then(data=>{
      setBlog(data.blog)
      setInputs({title:data.blog.title,description:data.blog.description})
    })
  });

  const sendRequest = async () =>{
    const res = await axios.put(`http://localhost:8000/api/blog/update/${id}`,{
      title:inputs.title,
      description:inputs.description
    }).catch(err =>console.log(err))
    const data = await res.data;
    return data;
  }

  console.log(blog)

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(inputs);
    sendRequest().then(data=>console.log(data)).then(()=>navigate('/myBlogs'))
  }

  

  return (
    <div className=" flex justify-center items-center h-screen">   
   {inputs &&
    <form action="" onSubmit={handleSubmit} className=' flex flex-col w-2/3 md:w-1/2 sm:w-2/3 border p-6 rounded-xl border-cyan-300'>
    <div className=' flex justify-center items-center'>
      <h3 className=' font-semibold text-2xl text-gray-200'>Update Your Blog </h3>
    </div>
      <label htmlFor="" className=' py-4  text-xl text-gray-300'>Title</label>
      <input required name='title' onChange={handleChange} value={inputs.title} className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
      <label htmlFor="" className=' py-4  text-xl text-gray-300'>Description</label>
        <textarea required name='description' onChange={handleChange} value={inputs.description}  className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
       

        <button  type='submit' className=' mt-6 py-2 bg-red-900 border rounded-2xl hover:bg-red-600 ' > Submit </button>
    </form>}
  </div>
  )
}

export default BlogDetails