import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


import{heroImage} from "/public/heroImage.png";
import { PiSpotifyLogoFill } from 'react-icons/pi';
import { BiLogoYoutube } from "react-icons/bi";


const HeroSection = () => {
  return (
    <section>
      <div  style={{
        backgroundImage: `url('/heroImage.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className=" px-4 xl:px-6 rounded-xl lg:rounded-[50px] w-full bg-black ">
        
     <h1 className=' text-lg lg:text-[42px] pt-20 lg:pt-[200px] text-white text-center'>Explore Authenticity with</h1>
     <h1 className=' text-white text-center text-[40px] lg:text-[100px] font-semibold'>Hatirpool Sessions</h1>
     <p className='text-center text-white text-lg lg:text-[32px] font-normal'>Listen us on</p>
     <div className='flex items-center justify-center '>
<div className='flex gap-5 pb-20 lg:pb-[187px] mt-6 lg:h-[300px]'>
<div>
<button className='flex gap-2 items-center overflow-hidden  px-4 py-2  lg:px-8 lg:py-4 rounded-[100px] bg-white hover:border-b-[4px] transition-all hover:border-[#FF8601] '>
<PiSpotifyLogoFill className=" text-black"/>
<p className='text-black'>spotify</p>
</button>
</div>
<div>
<button className='flex gap-2 items-center  hover:border-b-[4px] transition-all 
hover:border-b-3 hover:border-[#FF8601]
px-4 py-2  lg:px-8 lg:py-4 rounded-[100px] bg-white '>
<BiLogoYoutube className=" text-black "/>
<p className='text-black'>You tube</p>
</button>
</div>
</div>
     </div>
      </div>
    </section>
  );
};

export default HeroSection;
