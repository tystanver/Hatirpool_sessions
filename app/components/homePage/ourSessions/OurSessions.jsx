
"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { BsFillPlayFill } from "react-icons/bs";
import 'animate.css';


const OurSessions = () => {
    const [session1,setSession1]=useState(true)
    const [session2,setSession2]=useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Shohoreer Duita Gan',
            views: '144k',
            duration: '03:00',
          },
        {
            id: 1,
            title: 'Shohoreer Duita Gan',
            views: '144k',
            duration: '03:00',
          },
        {
            id: 1,
            title: 'Shohoreer Duita Gan',
            views: '144k',
            duration: '03:00',
          },
        {
            id: 1,
            title: 'Shohoreer Duita Gan',
            views: '144k',
            duration: '03:00',
          },
    ])
  
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      

  return (
    <section className='container mx-auto mt-20 text-sm'>
<div >
    <h4 className='text-center text-[#FF8601]'> Our sessions</h4>
    <h2 className='text-white text-sm lg:text-[42px] font-normal text-center mt-4 '>Listen Our Music Session</h2>
<div className='flex items-center justify-center gap-10 mt-4 lg:mt-10'>
<button
  onClick={() => {
    setSession1(true);
    setSession2(false);
  }}
  className={`px-4 py-2 font-medium lg:px-8 lg:py-[18px] ${
    session1
      ? 'bg-amber-500 text-black'
      : 'bg-gray-900 text-white'
  } rounded-[100px]`}
>
  Session 1
</button>

<button
  onClick={() => {
    setSession2(true);
    setSession1(false);
  }}
  className={`px-4 py-2 lg:px-8 lg:py-[18px] rounded-[100px] border  ${
    session2
      ? 'bg-amber-500 text-black'
      : 'bg-gray-900 text-white'
  }`}
>
  Session 2
</button>
</div>

 </div>

    <div className='bg-gray-900 rounded-[40px]  lg:h-[839px] '>
        { session1 && (
            <div className=''>
            <div className=' flex flex-col-reverse lg:grid grid-cols-2 gap-8 px-2 py-10 lg:p-[74px]  mt-5 lg:mt-10'>
        <div className='text-white text-center lg:text-left'>
        <h1 className=' text-xl lg:text-[32px]  '>Hatirpool Session 01</h1>
        <p className='mt-3'>Listen a summery of this session</p>
        <div className=' mt-5 lg:mt-10 flex justify-between  items-center  border-b border-gray-800  pb-4 lg:pb-8 text-white'>
        <div>
        <p>Album</p>
        </div>
        <div className='flex gap-[45px] md:gap-[165px] lg:gap-[170px]'>
        <p>View</p>
        <p>Duration</p>
        </div>
        </div>
        
        
        <div className='py-4 lg:py-10 space-y-8'>
        {data.map((item, idx) => (
    <div
      key={idx}
      className=" grid grid-cols-3 items -center overflow-hidden pb-4 hover:border-b border-gray-700"
      onMouseEnter={() => setIsHovered(idx)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className=' col-span-2 flex items-center justify-between'>
      <div className="flex gap-3 items-center">
        <BsFillPlayFill />
        <div>
          <Image src="/session1smallImage.png" alt="s1" height={40} width={40}  />
        </div>
        <p>{item.title}</p>
      </div>
     <div>
     <p>{item.views}</p>
     </div>
      </div>

<div className='flex items-center justify-end '>
    
    <div className="flex items-center gap-3 overflow-hidden ">
            {isHovered === idx && (
              <Image
                src="/YoutubeOrginal.png"
                alt="u tube"
                width={25}
                height={25}
                className=" "
              />
            )}
            <p>{item.duration}</p>
          </div>
    </div>

    </div>
  ))}
        
      
        

        </div>
        <div className=' flex  mt-2 items-center ml-4 '>
            <h1 className=' text-white'> Listen full Session on</h1>  
            <Link href="https://www.youtube.com/@HatirpoolSessions">
            <Image src="/YoutubeOrginal.png" alt='u tube' width={25} height={25} className='ml-5'/> </Link>
              <p className='text-white font-medium text-sm lg:text-2xl ml-2'> You Tube</p>
        
        </div>
        </div>
         <div>
         <Link href="https://www.youtube.com/watch?v=O3cIfEV0Emw&ab_channel=YamahaMusicBangladesh-ACIMotorsLtd">
         <Image src="/Session1pic.png" alt='session 1 ' className='w-full animate__animated  animate__fadeInRight' width={591} height={591}/>
          </Link>
        
       
        <div>
        <audio src="" className='text-white'>hello</audio>
        </div>
         </div>
            </div>
        </div>
        )
            
        }
        { session2 && (
            <div className=''>
            <div className=' flex flex-col-reverse lg:grid grid-cols-2 gap-8 py-10 px-2 lg:p-[74px]  mt-5 lg:mt-10'>
        <div className='text-white text-center lg:text-left'>
        <h1 className=' text-xl lg:text-[32px]  '>Hatirpool Session 02</h1>
        <p className='mt-3'>Listen a summery of this session</p>
        <div className=' mt-5 lg:mt-10 flex justify-between  items-center
          border-b border-gray-800  pb-4 lg:pb-8 text-white'>
        <div>
        <p>Album</p>
        </div>
        <div className='flex gap-[45px] md:gap-[165px] lg:gap-[175px]'>
        <p>View</p>
        <p>Duration</p>
        </div>
        </div>
        
        
        <div className='py-4 lg:py-10 space-y-8'>
        {data.map((item, idx) => (
    <div
      key={idx}
      className=" grid grid-cols-3 items -center overflow-hidden pb-4 hover:border-b border-gray-700"
      onMouseEnter={() => setIsHovered(idx)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className=' col-span-2 flex items-center justify-between'>
      <div className="flex gap-3 items-center">
        <BsFillPlayFill />
        <div>
          <Image src="/session2smalImage.png" alt="s1" height={40} width={40} />
        
        </div>
        <p>{item.title}</p>
      </div>
     <div>
     <p>{item.views}</p>
     </div>
      </div>

<div className='flex items-center justify-end '>
    
    <div className="flex items-center gap-3 overflow-hidden ">
            {isHovered === idx && (
              <Link href="https://www.youtube.com/@HatirpoolSessions"><Image
              src="/YoutubeOrginal.png"
              alt="u tube"
              width={25}
              height={25}
              className=" "
            /></Link>
            )}
            <p>{item.duration}</p>
          </div>
    </div>

    </div>
  ))}
    
        </div>
        <div className=' flex mt-2 items-center '>
            <h1 className=' text-white'> Listen full Session on</h1>  
            <Link href="https://www.youtube.com/@HatirpoolSessions">
            <Image src="/YoutubeOrginal.png" alt='u tube' width={25} height={25} className='ml-5 '/> </Link>
              <p className='text-white font-medium text-sm lg:text-2xl ml-2'> You Tube</p>
              <Link href="open.spotify.com/playlist/4YVsxvaJi1tsrl4otlNwfo">
            <Image src="/spotify2.png" alt='u tube' width={25} height={25} className='ml-5'/> </Link>
            <p className='text-white font-medium text-sm lg:text-2xl ml-2'>Spotify</p>
        
        </div>
        </div>
         <div>
          <Link href="https://www.youtube.com/watch?v=O3cIfEV0Emw&ab_channel=YamahaMusicBangladesh-ACIMotorsLtd">
          <Image src="/session2Image.png" alt='session 2 ' className='w-full animate__animated  animate__fadeInRight' width={591} height={591} />
          </Link>
        
        <div>
        <audio src="" className='text-white'>hello</audio>
        </div>
         </div>
            </div>
        </div>
        )
            
        }
        
    </div>
  
    

    </section>
  )
}

export default OurSessions