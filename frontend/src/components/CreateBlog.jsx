
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title:"",
    description:"",
    imageUrl:""
  })

 

  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async () =>{
    const res = await axios.post(`http://localhost:8000/api/blog/create`,{
      title:inputs.title,
      description:inputs.description,
      image:inputs.imageUrl,
      user:localStorage.getItem("userId")
    }).catch(err=>console.log(err));

    const data = res.data;
    return data;
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(inputs);
    sendRequest().then((data)=>console.log(data)).then(()=>navigate("/blogs"));
  }

  return (


    <div className=" flex justify-center items-center h-screen">
      

      
      <form action="" onSubmit={handleSubmit} className=' flex flex-col w-2/3 md:w-1/2 sm:w-2/3  border p-6 rounded-xl border-cyan-300'>
      <div className=' flex justify-center items-center'>
        <h3 className=' font-semibold text-2xl text-gray-200'>Post Your Blog </h3>
      </div>
        <label htmlFor="" className=' py-4  text-xl text-gray-300'>Title</label>
        <input required name='title' onChange={handleChange} value={inputs.title} className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
        <label htmlFor="" className=' py-4  text-xl text-gray-300'>Description</label>
          <textarea required name='description' onChange={handleChange} value={inputs.description}  className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
          <label htmlFor="" className=' py-4 text-xl text-gray-300'>ImageUrl</label>
          <input required name='imageUrl' onChange={handleChange} value={inputs.imageUrl}  className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

          <button  type='submit' className=' mt-6 py-2 bg-red-900 border rounded-2xl hover:bg-red-600 ' > Submit </button>
      </form>
      
    </div>
  )
}

export default CreateBlog