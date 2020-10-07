import Link from 'next/link'
import PopupLogin from '../components/popuplogin'
import PopupRegister from '../components/popupregister'
import React, { useState } from 'react';
import { Button } from 'antd';

export default  function Header(){
    const [visible, setVisible] = useState(false)

    const showModal = () => {
      setVisible(true)
    };
  
    const handleOk = e => {
      console.log(e);
      setVisible(false)
    };
  
    const handleCancel = e => {
      setVisible(false)
    };

// register

    const [visiblereg, setVisiblereg] = useState(false)

    const showModalreg = () => {
      setVisiblereg(true)
    };
  
    const handleOkreg = e => {
      console.log(e);
      setVisiblereg(false)
    };
  
    const handleCancelreg = e => {
      setVisiblereg(false)
    };
    return(
        <header className="shadow-lg phone:mb-2">
          <nav className="flex items-center justify-between flex-wrap phone:px-4">
           <div className="w-full bg-bateeq-topheader phone:hidden">
            <div className="container mx-auto grid grid-cols-4 lg:items-center  py-4">
           
                <div id="currency-selector" className="col-span-1 text-center">
                    <select className=" bg-transparent text-xs">
                        <option>Currency IDR</option>
                        <option>Currency USD</option>
                    </select>
                </div>
                <div id="info" className="col-span-2 text-center">
                    <div className="text-xs">
                        <div className="uppercase inline-block pl-4 pr-4">
                            <span >  Free for Shipping Indonesia Only</span>
                        </div>
                        <div className="uppercase inline-block pl-4 pr-4 border-l border-r border-black">
                           <span > FREE ALTERATION & CUSTOMIZATION </span>
                        </div>
                        <div className="uppercase inline-block pl-4 pr-4">
                            <span >
                            24/7 Customer Service
                            </span>
                        </div>
                    </div>
                </div>
                <div id="phone-number" className="col-span-1 justify-center text-xs flex">
                    <div className="flex-initial mr-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M4.62339 4.47243L4.66322 4.43433L4.6938 4.38846C4.89095 4.09274 4.88968 3.76783 4.88897 3.58539C4.88893 3.57497 4.88889 3.56501 4.88889 3.55556C4.88889 2.9488 4.76989 2.10812 4.52927 1.39558C4.48218 1.25613 4.40365 1.04261 4.2568 0.862249C4.0914 0.659094 3.84004 0.5 3.5 0.5H1.55556C1.27527 0.5 1.00284 0.595613 0.799224 0.799224C0.595613 1.00284 0.5 1.27527 0.5 1.55556C0.5 7.05392 4.94608 11.5 10.4444 11.5C10.7247 11.5 10.9972 11.4044 11.2008 11.2008C11.4044 10.9972 11.5 10.7247 11.5 10.4444V8.55556C11.5 8.27147 11.4066 8.01354 11.1874 7.81915C11.004 7.65652 10.77 7.57624 10.5895 7.52151C10.0614 7.36138 9.87991 7.29351 9.57038 7.17779C9.46802 7.13952 9.35167 7.09603 9.20416 7.04223C9.11138 6.99739 9.02286 6.98262 8.96722 6.97635C8.88752 6.96737 8.80876 6.96924 8.74015 6.97465C8.60212 6.98556 8.45309 7.01523 8.31649 7.05139C8.17836 7.08795 8.03665 7.13548 7.91193 7.18908C7.80577 7.23471 7.64913 7.31043 7.53534 7.42422L6.58122 8.37834C5.35307 7.65345 4.30339 6.63617 3.61956 5.43261L4.62339 4.47243Z" stroke="black"/>
                        </svg>
                    </div>
                    <span className="flex-initial">
                    +61 821 3739 2222
                    </span>
                </div>
            </div> 
            </div>

            <div id="tablet-searchbar" className="block w-full ">
        <div className=" block mt-4 align-middle phone:mr-0 phone:hidden lg:hidden text-right pr-10">        
                <input type="search" className="bg-transparent focus:outline-none py-1 px-2 inline w-24 align-top border-b border-black" placeholder="SEARCH" />
                    <button className="mr-0" type="submit">
                    <svg className="mt-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.60568 0C2.96341 0 0 2.96341 0 6.60568C0 10.2482 2.96341 13.2114 6.60568 13.2114C10.2482 13.2114 13.2114 10.2482 13.2114 6.60568C13.2114 2.96341 10.2482 0 6.60568 0ZM6.60568 11.9919C3.63577 11.9919 1.21951 9.57562 1.21951 6.60571C1.21951 3.6358 3.63577 1.21951 6.60568 1.21951C9.57559 1.21951 11.9918 3.63577 11.9918 6.60568C11.9918 9.57559 9.57559 11.9919 6.60568 11.9919Z" fill="black"/>
                        <path d="M14.8213 13.9591L11.3254 10.4632C11.0872 10.225 10.7014 10.225 10.4632 10.4632C10.225 10.7012 10.225 11.0874 10.4632 11.3254L13.9591 14.8213C14.0782 14.9404 14.2341 15 14.3902 15C14.5461 15 14.7022 14.9404 14.8213 14.8213C15.0595 14.5833 15.0595 14.1971 14.8213 13.9591Z" fill="black"/>
                    </svg>
                    </button>
            </div>
        </div>

        <div id="lower-header" className="container mx-auto lg:my-16 phone:my-16 tablet:mt-6 tablet:mb-16 w-full block flex-grow md:flex md:items-center ">
            <div id="language-selector" className=" w-full block flex-grow md:flex md:items-center md:w-1/3 phone:mb-4">
                <div className="flex w-1/2 md:justify-end pr-8">
                        <select className="text-xs ">
                            <option>English</option>
                            <option>Indonesia</option>
                        </select>
                </div>
            </div>
        <div className="inline-block md:hidden float-right">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-black hover:text-white hover:border-white">
            <svg className="fill-black h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>

        </div>
        <div id="logo" className="w-1/2 phone:inline-block flex-col md:flex md:items-center md:w-1/3">
                <Link href="/">  
                    <a className="w-auto ">
                        <img src="../logo_bateeq.png" />
                    </a>
                </Link>
               
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-1/3 text-base">
          <div className="text-base md:flex-grow md:text-right phone:text-left pr-8">
            <div className=" block mt-4 md:inline-block md:mt-0 mr-5 align-middle phone:mr-0 tablet:hidden">        
                <input type="search" className="bg-transparent border-b border-black focus:outline-none py-1 px-2 inline w-24 align-top phone:w-5/6" placeholder="SEARCH" />
                    <button className="mr-0" type="submit">
                    <svg className="mt-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.60568 0C2.96341 0 0 2.96341 0 6.60568C0 10.2482 2.96341 13.2114 6.60568 13.2114C10.2482 13.2114 13.2114 10.2482 13.2114 6.60568C13.2114 2.96341 10.2482 0 6.60568 0ZM6.60568 11.9919C3.63577 11.9919 1.21951 9.57562 1.21951 6.60571C1.21951 3.6358 3.63577 1.21951 6.60568 1.21951C9.57559 1.21951 11.9918 3.63577 11.9918 6.60568C11.9918 9.57559 9.57559 11.9919 6.60568 11.9919Z" fill="black"/>
                        <path d="M14.8213 13.9591L11.3254 10.4632C11.0872 10.225 10.7014 10.225 10.4632 10.4632C10.225 10.7012 10.225 11.0874 10.4632 11.3254L13.9591 14.8213C14.0782 14.9404 14.2341 15 14.3902 15C14.5461 15 14.7022 14.9404 14.8213 14.8213C15.0595 14.5833 15.0595 14.1971 14.8213 13.9591Z" fill="black"/>
                    </svg>
                    </button>
            </div>
            <div className="phone:flex inline-block">
            <div className="mt-4 inline-block lg:mt-0 mr-6 text-base">
                <a href="#responsive-header " className="text-black">
                    <svg className="inline-block lg:mt-0 align-middle" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8222 1.41007C13.9873 0.512622 12.8173 0.00198696 11.5915 9.39718e-05C10.3647 0.00151372 9.19355 0.511878 8.35732 1.40949L8.07233 1.71065L7.78733 1.40949C6.12802 -0.376375 3.33511 -0.478935 1.54928 1.18037C1.47014 1.25393 1.39372 1.33033 1.32016 1.40949C-0.440053 3.3081 -0.440053 6.2423 1.32016 8.14091L7.6535 14.8198C7.87262 15.0511 8.23776 15.061 8.46908 14.8419C8.47665 14.8348 8.48402 14.8274 8.49118 14.8198L14.8222 8.14091C16.5823 6.24251 16.5823 3.30847 14.8222 1.41007ZM13.9874 7.34649H13.9868L8.07233 13.5846L2.15727 7.34649C0.812567 5.89578 0.812567 3.65404 2.15727 2.20333C3.37842 0.879795 5.44134 0.796807 6.76488 2.01796C6.82914 2.07725 6.89096 2.13907 6.95026 2.20333L7.6535 2.94525C7.88526 3.17552 8.25943 3.17552 8.49118 2.94525L9.19443 2.20391C10.4156 0.880369 12.4785 0.797382 13.802 2.01853C13.8663 2.07782 13.9281 2.13965 13.9874 2.20391C15.3438 3.65692 15.3538 5.90275 13.9874 7.34649Z" fill="black"/>
                    </svg>
                    <span className="pl-1">0</span>
                    </a>
            </div>
            <div className="mt-4 inline-block lg:mt-0 mr-6 text-base">
                    <a href="#responsive-header" className="text-black">
                        <svg className="inline-block lg:mt-0 "  width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="3.5" width="12" height="11" rx="0.5" stroke="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1C5.67157 1 5 1.67157 5 2.5V5.5H4L4 2.5C4 1.11929 5.11929 0 6.5 0C7.88071 0 9 1.11929 9 2.5V5.5H8V2.5C8 1.67157 7.32843 1 6.5 1Z" fill="black"/>
                        </svg>
                        <span className="pl-1">0</span>
                    </a>
            </div>
            <div className="mt-4 inline-block lg:mt-0 mr-6 text-base">
                    <a href="#responsive-header" className="text-black">
                    <svg className="inline-block lg:mt-0 " width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8033 9.69668C11.9864 8.87982 11.0141 8.27511 9.95329 7.90904C11.0895 7.12649 11.8359 5.81684 11.8359 4.33594C11.8359 1.94511 9.89083 0 7.5 0C5.10917 0 3.16406 1.94511 3.16406 4.33594C3.16406 5.81684 3.91052 7.12649 5.04674 7.90904C3.9859 8.27511 3.01359 8.87982 2.19671 9.69668C0.780147 11.1133 0 12.9967 0 15H1.17188C1.17188 11.5107 4.01065 8.67188 7.5 8.67188C10.9893 8.67188 13.8281 11.5107 13.8281 15H15C15 12.9967 14.2199 11.1133 12.8033 9.69668ZM7.5 7.5C5.75534 7.5 4.33594 6.08063 4.33594 4.33594C4.33594 2.59125 5.75534 1.17188 7.5 1.17188C9.24466 1.17188 10.6641 2.59125 10.6641 4.33594C10.6641 6.08063 9.24466 7.5 7.5 7.5Z" fill="black"/>
                    </svg>
                    </a>
            </div>
            <div className="mt-4 inline-block lg:mt-0 text-black hover:underline font-normal uppercase text-base">
                    <a href="#responsive-header" className="text-black">
=======

            <div className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline font-normal uppercase text-base">
                    <PopupLogin visible={visible} handleCancel={handleCancel} handleOk={handleOk} />
                    <PopupRegister visiblereg={visiblereg} handleCancelreg={handleCancelreg} handleOkreg={handleOkreg} />
                    <Button onClick={showModalreg}>
                        Register
                    </Button>
                    <Button onClick={showModal}>
>>>>>>> master
                    Login
                    </Button>

            </div>
            </div>
          </div>
        </div>
        </div>
     

        <div id="header-menu" className=" w-full block lg:items-center px-16 tablet:px-2 pt-4 pb-4 phone:hidden">
            <ul className="block text-center text-base uppercase">
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black hover:text-blue-800" href="#">New Arrival</a>
                </li>
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black hover:text-blue-800" href="#">Women</a>
                </li>
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black hover:text-blue-800" href="#">Men</a>
                </li>
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black cursor-not-allowed" href="#">Kids</a>
                </li>
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black cursor-not-allowed" href="#">Home Living</a>
                </li>
                <li className="mx-16 inline-block tablet:mx-8">
                    <a className="text-black cursor-not-allowed" href="#">Sale</a>
                </li>
             </ul>
        </div>
      </nav>
      </header>
        
    )
}