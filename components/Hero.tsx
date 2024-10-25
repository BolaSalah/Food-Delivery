import Link from 'next/link';
import React from 'react';
import { assets } from './../assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='header sm:mt-8 mt-3 relative text-white'>
      <Image src={assets.header_img} alt='header_img' className='w-full' />
      <div className='absolute bottom-[10%] left-[5%] lg:w-1/2'>
        <div className='sm:mb-6 mb-2 xl:text-6xl lg:text-3xl sm:text-2xl text-[10px] font-bold'>
          Order your favourite food here
        </div>
        <div className='my-6 lg:block hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quaerat explicabo, earum quasi iure ut perferendis! Vero voluptatum
          deleniti, aut impedit asperiores ratione iure earum sadas
        </div>
        <div>
          <Link
            href='#menu'
            className='border border-red-900 sm:px-6 px-3 sm:py-2 py-1 rounded-full hover:bg-slate-500 hover:text-white transition duration-200'
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
