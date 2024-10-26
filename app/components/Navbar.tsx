'use client';

import Image from 'next/image';
import { assets } from './../assets/assets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { logout } from "../services/auth";
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const [nameSecurity, setNameSecurity] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
        setNameSecurity( user.displayName );
        console.log( user );
        console.log( user.displayName );
      } else {
        setNameSecurity('');
      }
    } );
    console.log( nameSecurity );
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Dependency array should be here
  
  const handleSignOut = async () => {
 try {
   localStorage.clear();
   await logout();
         router.push('/login');
 } catch (err) {
   console.log(err.message);
 }
}
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
            {/* {nameSecurity ? (
                 <button
                           onClick={() => {
                             handleSignOut();
                           }}
                           className="navbar-right-register"
                         >
                           logout
                         </button>
            ) : (
              <Link href={'signin'} className='navbar-right-register'>
                sign in
              </Link>
            )} */}

            {/* start */}
             <div className={`px-2 mt-4 h-8 w-[150px] overflow-hidden border border-[#131921] hover:border-white hover:overflow-visible`}>
               <div className={`z-10 relative top-0 duration-1000 `}>
                 {nameSecurity ? (
                    <>
                     <Link href={"/login"}>
                       <div className="text-xs xl:text-sm">
                       Hello <span>{nameSecurity}</span>
                       </div>
                     </Link>
                     <div className="bg-white border border-[#cbc3c3]  rounded-lg  w-[230px] mt-4 -ml-12 text-black flex flex-col justify-center items-center">
                       <div
                         className="rounded-lg my-4 mb-3 text-sm flex w-[100px] items-center justify-center h-8
                       bg-[#FFD814] border border-[#FCD200] 
                       hover:bg-[#F7CA00] hover:border-[#F2C200] hover:cursor-pointer
                        active:bg-[#F0B800] active:border-[#008296] active:shadow-continueButton"
                       >
                         <button className="hover:cursor-pointer"  onClick={() => {
                             handleSignOut();
                           }}>
                           Sign Out
                         </button>
                       </div>
                     </div>
                   </>
                 ) : (
                   <>
                     <Link href={"/signin"}>
                       <div className="text-xs xl:text-sm">
                         Hello, sign in
                       </div>
                     </Link>
                     <div className="bg-white border border-[#cbc3c3]  rounded-lg  w-[230px] mt-4 -ml-12 text-black flex flex-col justify-center items-center">
                       <div
                         className="rounded-lg my-4 mb-3 text-sm flex w-[100px] items-center justify-center h-8
                       bg-[#FFD814] border border-[#FCD200] 
                       hover:bg-[#F7CA00] hover:border-[#F2C200] hover:cursor-pointer
                        active:bg-[#F0B800] active:border-[#008296] active:shadow-continueButton"
                       >
                         <Link className="hover:cursor-pointer" href={"/signin"}>
                           Sign in
                         </Link>
                       </div>
                     </div>
                   </>
                 )}
               </div>
             </div>
            {/* end */}
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

