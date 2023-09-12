 
 "use client"
import Image from "next/image";
import { PiShoppingCartDuotone } from "react-icons/pi";
// import { contactImage } from "/my-app/public/ContactUsImage.png";

const ContactUs = () => {
  return (
    <div className='container mx-auto lg:grid grid-cols-2 gap-12 mt-10 flex flex-col-reverse
    
    
    '>
        <div className="flex items-center justify-center">
        <div className="text-center lg:text-left ">
        <div className=" text-amber-500 text-base font-normal ">Contact Us</div>
        <div className="mt-4 text-white text-[32px]  lg:text-[42px] font-normal text-center lg:text-left">Explore Our Shop</div>
<p className="text-justify mt-5 text-white scroll-my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue mauris id placerat semper. Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aenean congue mauris id placerat semper. Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue mauris id placerat semper. Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aenean congue mauris id placerat semper. Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue mauris id placerat semper. Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
     
     </p>
     <div className="mt-4 flex items-center justify-center lg:justify-start">
        <button className=" px-4 py-2 lg:px-8 lg:py-4 bg-amber-500 rounded-2xl flex items-center gap-1 ">
          <PiShoppingCartDuotone/>
         <span className="inline-block">Shop Now</span>
        </button>
     </div>
        </div>
        </div>
        <div>
          <Image src="/ContactUsImage.png" alt="contact image" width={500} height={500} className="w-full "/>
        </div>
    </div>
  )
}

export default ContactUs