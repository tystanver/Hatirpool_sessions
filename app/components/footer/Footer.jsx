
"use client" 
import Image from "next/image";
import LOGO from "/public/Logo (1).png";
import { PiSpotifyLogoFill } from "react-icons/pi";
// import { } from "react-icons/ai";
import {  RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { useFormik } from 'formik';




import Link from "next/link";
import { TextField } from "@mui/material";
const Footer = () => {

  const styles = {
    floatingLabelFocusStyle: {
        color: "white"
    }
}
  const {
    handleChange,
    handleBlur,
    values,
    handleSubmit,
    resetForm,
   
  } = useFormik({
    initialValues: {
      email:"",
    },
  
    onSubmit: async (data) => {
      try {
        console.log(data);
        resetForm()
        const newData = {
          value: data.school_pass_year,
          
        };
      
      } catch (error) {}
    },
  });
  return (
    <footer className=" text-sm lg:text-lg lg:pt-20  pb-10 py-10 top-[100vh] sticky  bottom-0 bg-black text-white ">
      <div
        className="container mx-auto  lg:p-[74px] bg-gray-900 lg:flex text-center lg:text-left justify-between border-b pb-10 lg:pb-20 space-y-8 lg:space-y-0"
      >
        <div className=" ">
          <div className="flex justify-center lg:justify-start">
            <Image src={LOGO} alt="tanver" />
          </div>
          <div className=" lg:text-left text-center">
            <p className=" text-sm lg:text-lg  lg:mt-[30px] mt-3  ">
            Clarity gives you the blocks and <br /> components you need to create <br /> a truly professional website.
            </p>
          </div>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-4 mt-5">
        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
     <PiSpotifyLogoFill className=" text-white"/>
      </div>
     <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
     <FaFacebook className=" text-white"/>
     </div>
      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
     <RiInstagramFill className=" text-white"/>
  </div>
  <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
     <BsYoutube className=" text-white"/>
  </div>
 

</div>
        </div>
       <div>
    
<div className="  text-sm lg:text-lg ">
          <h3 className="text-[18px] text-[#FF8601] font-semibold">Hatirpool</h3>
          <p className="lg:mt-[30px] mt-3">
            <Link href="/about">About</Link>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Feature</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Works</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">People</a>
          </p>
          
        </div>

       </div>
       <div className="  text-sm lg:text-lg ">
          <h3 className="text-[18px] text-[#FF8601] font-semibold">Help</h3>
          <p className="lg:mt-[30px] mt-3">
            <Link href="/about">Customer Support</Link>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Contact Info</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Terms & Conditions</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Privacy Policy</a>
          </p>
          
        </div>
       <div className="  text-sm lg:text-lg ">
          <h3 className="text-[18px] font-semibold text-[#FF8601]">NewsLetter</h3>
        <div className="lg:mt-7 mt-4">
        <form className="" onSubmit={handleSubmit}>
        <TextField
  label="Enter Your Email Address"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  name="email"
  InputLabelProps={{ style: { color: 'white' } }} // Change the label color to white
  InputProps={{ classes: { input: 'white-input' } }} // Apply a CSS class for input styling
/>
  <div>
    <button
      type="submit"
      className="bg-[#FF8601] rounded-[50px] lg:rounded-full p-4 mt-4 font-medium lg:w-full text-white"
    >
      Subscribe Now
    </button>
  </div>
</form>
        </div>
          
        </div>
      </div>
      <div className="mt-[50px]">
        <p className="text-center font-medium">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by Hatirpool
          12
        </p>
      </div>
    </footer>
  );
};

export default Footer;