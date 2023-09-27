"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Accordion, Button, Menu, MenuItem} from '@mui/material';
import { BsChevronDown } from "react-icons/bs";
import MobileDrawer from './mobileDrawer/MobileDrawer';
import { styled } from '@mui/material/styles';

const Navbar = () => {

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    const currentRoute = usePathname();
   
    // const [showChild1, setShowChild1] = useState(false);
    // const [showChild2, setShowChild2] = useState(false);
    // const [rotateIcon1, setRotateIcon1] = useState(false);
    // const [rotateIcon2, setRotateIcon2] = useState(false);
    // const toggleChild1 = () => {
    //     setShowChild1(!showChild1);
    //     setRotateIcon1(!rotateIcon1);
    //   };
    // const toggleChild2 = () => {
    //     setShowChild2(!showChild2);
    //     setRotateIcon2(!rotateIcon2);
    //   };

      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const CustomAccordion = styled(Accordion)(({ theme }) => {
        return {
          boxShadow: 'none', 
        padding:0,
          '.MuiAccordionDetails-root': {
            padding:0,
          },
          '.MuiAccordionSummary-root': {
            padding:0,
            gap:0,
            
          }, 
        };
      });


    return (
        <nav className={`sticky top-0 z-10 border-b  bg-black${
            isScrolled ? "shadow-lg bg-black" : ""
          }`}>
            <div className=' container mx-auto flex items-center justify-between px-2 lg:px-0 xl:px-4 py-4 '>
                <div>
                    <Image className='' src="/NavabrLogo.png" alt='logo' width={92} height={92}/>
                </div>

<div className='block lg:hidden '>
    <MobileDrawer/>
    </div>

                <div className='hidden lg:block'>
                    <ul className='flex gap-10 items-center'>
                        <li className=' text-white'>
                            <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}>
                                Home
                            </Link>
                        </li>
                        
                       <li>

                       <div>
                       <Button
                       className='text-lg'
  id="demo-customized-button"
  aria-controls={open ? 'demo-customized-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  disableElevation
  onClick={handleClick}
  endIcon={<BsChevronDown style={{ color: 'white' }} />}
  color="inherit" 
  variant="text" 
  sx={{ color: '#FFA000',textTransform: 'none' }} 
>
  Sessions
</Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
         
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        
          Duplicate
        </MenuItem>
       
        <MenuItem onClick={handleClose} disableRipple>
          
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
       
          More
        </MenuItem>
      </StyledMenu>
    </div>



                       </li>
                            
                       
                        {/* <li className='relative'>
                        
                           <div className='flex gap-5 items-center'>
                           <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}> 
                            <p className=' '>Session</p>  </Link>    
                           <div onClick={toggleChild1} className=' text-white'>
                           <BsChevronDown className={rotateIcon1 ? "rotate-icon1" : ""}/>
                           </div>
                           </div>
                           {showChild1 && (
          <div>
            <div className='absolute top-10  text-[#FF8601] text-center bg-white  rounded shadow-md w-64 space-y-2 px-8 py-8 cursor-pointer'>
          <p className='hover:bg-gray-200 text-center'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          </div>
          </div>
        )}
                        
                        </li> */}
                      
                  
                        <li className='tex-white'>
                        <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium text-white"}>
                              Story
                            </Link>
                        </li>
                        <li className='tex-white'>
                        <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601] " : "font-medium text-white"}>
                              Artist
                            </Link>
                        </li>
                        
                    
                        {/* <li className='relative'>
                        
                           <div className='flex gap-5 items-center'>
                           <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}> 
                            <p className=' '>More</p>  </Link>    
                           <div onClick={toggleChild2} className=' text-white'>
                           <BsChevronDown className={rotateIcon2 ? "rotate-icon2" : ""}/>
                           </div>
                           </div>
                           {showChild2 && (
          <div className='absolute top-10  text-[#FF8601] text-center bg-white rounded shadow-md w-64 space-y-2 px-8 py-8 cursor-pointer'>
          <p className='hover:bg-gray-200 text-center'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          <p className='hover:bg-gray-200'>home</p>
          </div>
        )}
                        
                        </li> */}
    <li>
    {/* <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601] " : "font-medium text-white"}> */}
<div>
<Button className='text-lg'
id="demo-customized-button"
aria-controls={open ? 'demo-customized-menu' : undefined}
aria-haspopup="true"
aria-expanded={open ? 'true' : undefined}
disableElevation
onClick={handleClick}
endIcon={<BsChevronDown style={{ color: 'white' }} />}
color="inherit" 
variant="text" 
sx={{ color: '#FFA000',textTransform: 'none' }} 
>
More
</Button>
<StyledMenu
id="demo-customized-menu"
MenuListProps={{
'aria-labelledby': 'demo-customized-button',
}}
anchorEl={anchorEl}
open={open}
onClose={handleClose}
>
<MenuItem onClick={handleClose} disableRipple>

Edit
</MenuItem>
<MenuItem onClick={handleClose} disableRipple>

Duplicate
</MenuItem>

<MenuItem onClick={handleClose} disableRipple>

Archive
</MenuItem>
<MenuItem onClick={handleClose} disableRipple>

More
</MenuItem>
</StyledMenu>
</div>

{/* </Link> */}

</li>
       
                    </ul>
                </div>
                <div className='hidden lg:block'>
                <Link href="/bookAShowPage">
                <button className='bg-[#FF8601] px-4 py-2 lg:px-8 lg:py-4 rounded-lg lg:rounded-[20px]'>Book a Show</button>
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
