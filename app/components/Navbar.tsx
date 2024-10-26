'use client';

import Image from 'next/image';
import { assets } from './../assets/assets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { logout } from "../services/auth";

const Navbar = () => {

 const [nameSecurity, setNameSecurity] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
        setNameSecurity( user.displayName );
        console.log( user );
        console.log( user.displayName );
      } else {
        setNameSecurity('no user');
      }
    } );
    console.log( nameSecurity );
  //    const handleSignOut = async () => {
  //   try {
  //     localStorage.clear();
  //     await logout();
  //     navigate("/login")
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }

  //  <button
  //                         onClick={() => {
  //                           handleSignOut();
  //                         }}
  //                         className=" hover:cursor-pointer hover:text-[#C7511F] hover:underline"
  //                       >
  //                         Sign Out
  //                       </button>
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Dependency array should be here

  const pathname = usePathname();
  return (
    <>
      {/* navbar for large screen */}
      <div className='navbar w-full'>
        <Link href={'/'} className='navbar-icon'>
          <p className='navbar-icon'>Food Delivery</p>
        </Link>
        <div className='navbar-menu'>
          <div className='navbar-menu-items'>
            <Link
              href={'/'}
              className={pathname === '/' ? 'navBarLinActive' : ''}
            >
              Home
            </Link>
            <Link
              href={'contact'}
              className={pathname === '/contact' ? 'navBarLinActive' : ''}
            >
              contact us
            </Link>
          </div>
        </div>
        <div className='navbar-right'>
          <div className='navbar-right-items'>
            <Link href={'search'}>
              <Image
                src={assets.search_icon}
                alt='search_icon'
                className='navbar-right-img'
              />
            </Link>
            <Link href={'cart'} className='navbar-right-cart'>
              <Image
                src={assets.basket_icon}
                alt='bag_icon'
                className='navbar-right-img'
              />
              <div className='navbar-right-img-dot'></div>
            </Link>
            <Link href={'signin'} className='navbar-right-register'>
              sign in
            </Link>
            <p>{nameSecurity}</p>
          </div>
        </div>
      </div>
      {/* navbar-mobile-screen */}
      {/* <div className='mobile-nav'>
        <div className='mobile-nav-items'>
          <div className='mobile-nav-item'>
            <Link href={'/'} className='mobile-nav-link'>
              Home
            </Link>
          </div>
          <div className='mobile-nav-item'>
            <Link href={'about'} className='mobile-nav-link'>
              About
            </Link>
          </div>
          <div className='mobile-nav-item'>
            <Link href={'contact'} className='mobile-nav-link'>
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

{/* start */}
            // <div
            //   className={`px-2 mt-4 h-11 w-[150px] overflow-hidden border border-[#131921] hover:border-white hover:overflow-visible ${
            //     language === "ar" ? "flex-row-reverse" : "flex-row"
            //   }`}
            // >
            //   <div className={`z-10 relative top-0 duration-1000 `}>
            //     {nameSecurity ? (
            //       <div
            //         className={`${
            //           language === "ar" ? "flex-row-reverse" : "flex-row"
            //         }`}
            //       >
            //         <div className="text-xs xl:text-sm">
            //           {t("Hello")} <span>{nameSecurity}</span>
            //         </div>
            //         <div className="text-xs xl:text-base font-bold">
            //           {t("Accounts & Lists")}
            //         </div>
            //         <div className="bg-white border border-[#cbc3c3] rounded-lg  w-[200px] mt-4 -ml-8 text-black flex flex-col ">
            //           <div className="flex flex-col mb-4 mx-5">
            //             <p className="font-[500] mt-3 mb-2">
            //               {t("Your Account")}
            //             </p>
            //             <span className="mb-1">
            //               <Link
            //                 to={"/account"}
            //                 className=" hover:cursor-pointer hover:text-[#C7511F] hover:underline"
            //               >
            //                 {t("Account")}
            //               </Link>
            //             </span>
            //             <span className="mb-2">
            //               <Link
            //                 to={"/orders"}
            //                 className=" hover:cursor-pointer hover:text-[#C7511F] hover:underline"
            //               >
            //                 {t("Orders")}
            //               </Link>
            //             </span>
            //             <button
            //               onClick={() => {
            //                 handleSignOut();
            //               }}
            //               className=" hover:cursor-pointer hover:text-[#C7511F] hover:underline"
            //             >
            //               {t("Sign Out")}
            //             </button>
            //           </div>
            //         </div>
            //       </div>
            //     ) : (
            //       <>
            //         <Link to={"/login"}>
            //           <div className="text-xs xl:text-sm">
            //             {t("Hello, sign in")}
            //           </div>
            //           <div className="text-xs xl:text-base font-bold">
            //             {t("Accounts & Lists")}
            //           </div>
            //         </Link>
            //         <div className="bg-white border border-[#cbc3c3]  rounded-lg  w-[230px] mt-4 -ml-12 text-black flex flex-col justify-center items-center">
            //           <div
            //             className="rounded-lg my-4 mb-3 text-sm flex w-[100px] items-center justify-center h-8
            //           bg-[#FFD814] border border-[#FCD200] 
            //           hover:bg-[#F7CA00] hover:border-[#F2C200] hover:cursor-pointer
            //            active:bg-[#F0B800] active:border-[#008296] active:shadow-continueButton"
            //           >
            //             <Link className="hover:cursor-pointer" to={"/login"}>
            //               {t("Sign in")}
            //             </Link>
            //           </div>
            //           <div>
            //             <p className="mb-4">
            //               {t("New customer?")}{" "}
            //               <Link
            //                 to={"/register"}
            //                 className="text-blue-500 hover:text-[#C7511F] hover:underline"
            //               >
            //                 {t("Start here.")}
            //               </Link>
            //             </p>
            //           </div>
            //         </div>
            //       </>
            //     )}
            //   </div>
            // </div>
            {/* end */}