

"use client"


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from 'next/image';
import { Rating } from '@mui/material';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';

// ... (other imports)

const AboutArtist = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data, setData] = useState([
    {
        id: 1,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    {
        id: 2,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    {
        id: 3,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    {
        id: 4,
        name: 'Tanve Hossain',
title:"Co-Founder"       
      },
    
    
])
  const [isSwiperScrolled, setIsSwiperScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleTabPanelHover = () => {
    setIsHovered(true);
  };

  const handleTabPanelLeave = () => {
    setIsHovered(false);
  };

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);

  // Function to handle clicking the "Founder" button
  const handleFounderButtonClick = () => {
    setTab1(true);
    setTab2(false);
    setValue('1'); // Set the tab value to '1' when "Founder" is clicked
  };
  const handleFounderButtonClick2 = () => {
    setTab2(true);
    setValue('1'); 
    setTab1(false);// Set the tab value to '1' when "Founder" is clicked
  };
  const handleSwiperScroll = () => {
    setIsSwiperScrolled(true);
  };
  return (
    <section className='container mx-auto text-white'>
      <h4 className='text-center'>About us</h4>
      <h1 className='text-[42px] mt-5 text-center text-white'>Know The Artist</h1>
      <div className='flex items-center justify-center mt-4'>
        <div className='flex items-center'>
        <button
    onClick={handleFounderButtonClick}
    className={`border-l border-t border-b px-8 py-4 rounded border-gray-900 ${
      tab1 ? 'bg-amber-500 text-black' : 'text-white'
    } `}
  >
    Founder
  </button>
        </div>
        <div>
        <button
    onClick={handleFounderButtonClick2}
    className={`border-r border-t border-b px-8 py-4 rounded-tr-md border-gray-900 ${
      tab2 ? 'text-black bg-amber-500' : 'text-white'
    }`}
  >
    Artist
  </button>
        </div>
      </div>


     <div className='bg-gray-800 p-5 lg:p-20 mt-0'>
     {tab1 && (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{
data.map((item,idx)=>(
<SwiperSlide key={idx} className="">
        <div className="bg-gray-900 p-5 rounded-xl" onMouseEnter={() => setIsHovered(idx)}
      onMouseLeave={() => setIsHovered(null)}>
                  <div className='flex items-center justify-center'>
                  <div className={`flex items-center justify-center h-[225px] w-[225px] bg-gray-800 rounded-full relative ${isHovered ? "h-[200px] w-[200px]" : ""}`}>
                    <Image src="/FounderImage.png" alt="ellipse" width={225} height={225} className={isHovered ===idx? "h-[200px] w-[200px]" : "h-[225px] w-[225px]"} />
                    {isHovered === idx && (
                      <div className="transition-all delay-1000  border-8 absolute h-[200px] w-[200px] border-[#FF8601] rounded-full top-[13px]"></div>
                    )}
                  </div>
                  </div>
                  <h1 className={isHovered ==idx ? "text-[#FF8601] mt-4 text-lg " : "mt-4 text-lg text-white"}>Alif Kormokar</h1>
                  <p className="mt-2 text-white">Co-Founder</p>
                </div>
        </SwiperSlide>
))
      }
        
        
      
      </Swiper>
        
      )}
     {tab2 && (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{
data.map((item,idx)=>(
<SwiperSlide key={idx} className="">
<div className="bg-gray-900 p-2 lg:p-5 rounded-xl relative" onMouseEnter={() => setIsHovered(idx)}
    onMouseLeave={() => setIsHovered(null)}>
    <div className= ' flex items-center justify-center '>
        <div className="items-center justify-center relative h-[300px] w-[225px] overflow-hidden">
            <Image src="/ArtistImage.png" alt="ellipse" width={225} height={225} className={isHovered ===idx ? "border-4 rounded-md border-[#FF8601] transition-all duration-2000" : "rounded-md transition-all duration-2000 flex items-center justify-center"} />
            <div className={isHovered ==idx ? "absolute bottom-[75px] bg-[#FF8601] p-1 w-full text-black transition-all duration-2000" : " transition-all duration-2000 mt-4 text-white"}>
                <h1 className="text-lg    ">{isHovered ==idx ? "Hi this is " : "Tanver Hossain dolon"}</h1>
                <p className="mt-1 ">{isHovered ==idx? "Tanver Hossain dolon" : "Co-Founder"}</p>
            </div>
            <div className={isHovered===idx ? "absolute  bottom-[-5px] text-center w-full text-white transition-all duration-2000" : "bottom-[-90px] "}>
                <h1 className="text-lg text-white text-justify ">Lorem ipsum dolor sit met consectetur </h1>
            </div>
        </div>
    </div>
</div>
        </SwiperSlide>
))
      }
        
        
      
      </Swiper>
        
      )}
     </div>

      {/* TabContent */}
    </section>
  );
};

export default AboutArtist;

