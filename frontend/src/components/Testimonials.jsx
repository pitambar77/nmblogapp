import React from 'react'
import Slider from 'react-slick'


const TestimonialData = [
    {
        id:1,
        name:"Rohit",
        text:" Success is not final, failure is not fatal; it's the courage to continue that counts, encapsulates the essence of a resilient and determined mindset",
        img:"https://static.toiimg.com/photo/103614340.cms"
    },
    {
        id:2,
        name:"Sanjeev Kapoor",
        text:" A recipe has no soul, you as the cook must bring  soul to the recipe",
        img:"https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india1.jpg"
    },
    {
        id:3,
        name:"Sundar Pichai ",
        text:"It's Important to follow your dreams and heart. Do something that excities you ",
        img:"https://media.licdn.com/dms/image/C5112AQEF7r0X3S6ceg/article-cover_image-shrink_600_2000/0/1520134718540?e=2147483647&v=beta&t=a7iXu21qVqRM5L1ojUjXhgj3VOrvuUsee_nUhdLSv0I"
    },
    {
        id:4,
        name:"Albert Einstein",
        text:"Look deep into nature, and then you will understand everything better ",
        img:"https://cdn.pixabay.com/photo/2023/09/30/17/30/ai-generated-8286112_1280.jpg"
    },
    {
        id:5,
        name:"Sushant Singh",
        text:"Your result does not decide whether you are a loser or not, you effort decides.",
        img:"https://pbs.twimg.com/media/FZpeSSyVUAAOglT.jpg"
    },
    {
        id:6,
        name:"Steve Jobs",
        text:"Design is not just what it looks like and feels like. Design is how it works.",
        img:"https://image.cnbcfm.com/api/v1/image/104300870-steve_jobs.jpg?v=1532563905"
    }
]


const Testimonials = () => {

    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                },
            }
        ]
      };

  return (

    <div className=' py-10 flex justify-center items-center bg-gradient-to-b from-slate-900 to-gray-800'>
        <div className=' container '>
            <div className=' text-center'>
                <h1 className=' text-3xl text-gray-300 font-bold mb-4'>Testimonials</h1>
            </div>
            <div>
                <Slider {...settings}>
                    {TestimonialData.map((data)=>(
                        <div className=' my-6' key={data.id}>
                            <div className=' flex flex-col gap-4 shadow-lg  py-8 px-6 mx-8 rounded-xl  bg-gradient-to-b from-orange-100 to-yellow-100 relative'>
                                <div className=' mb-4'>
                                <img src={data.img} alt='' className=' rounded-full w-20 h-20'/>
                                </div>
                                <div className=' flex flex-col items-center gap-4'>
                                    <div className=' space-y-3'>
                                        <p className=' text-xs text-gray-700 '>{data.text}</p>
                                        <p className=' text-xl font-semibold text-gray-600 font-serif '>{data.name}</p>

                                    </div>
                                </div>
                                <p className=' text-9xl text-black/20 absolute top-0 right-0 font-serif '>,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials