"use client"

import React from 'react';
import { assets } from './../assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    // whatsAppUrl, code and phone for whatsapp masssage
    const whatsAppUrl = 'https://wa.me/'; 
  const countryCode = '+20'; 
  const phoneNumber = '01202554039';

    // email address for  masssage on gmail
    const emailAddress = 'bolasalah1999@gmail.com';

  return (
    <div className='footer  text-[#d1cccc] flex justify-center'>
      <div className='lg:px-20 md:px-15 sm:px-10 px-4 pt-12 pb-4 xl:w-[1250px] w-full bg-[#252424]'>
        <div className='flex flex-wrap justify-between md:text-start text-center'>
          <div className='md:w-1/2 '>
            <p className='protest-guerrilla-regular sm:text-[30px]'>
              Food Delivery
            </p>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quaerat explicabo, earum quasi iure ut perferendis!
              Vero voluptatum deleniti, aut impedit asperiores ratione iure
              earum sadas
            </p>
          </div>
          <div className='md:w-1/3 flex flex-col w-full'>
            <h1 className='font-bold text-xl mt-3'>COMPANY</h1>
            <Link href={"/"} className='mt-4 hover:text-[#bfc3c4]'>Home</Link>
            <Link href={"/contact"} className='hover:text-[#bfc3c4]'>Contact us</Link>
            <p>Privacy policy</p>
          </div>
          {/* <div className='w-1/5'>
            <h1 className='font-bold text-xl mt-3'>Get in touch</h1>
            <p className='mt-4 hover:cursor-pointer hover:text-[#bfc3c4]'
            onClick={() => window.open(`${whatsAppUrl}${countryCode}${phoneNumber}`)}
            >01202554039</p>
            <p
              className='hover:cursor-pointer hover:text-[#bfc3c4]'
              onClick={() => window.open(`mailto:${emailAddress}`)}
            >
              bolasalah1999@gmail.com
            </p>
          </div> */}
        </div>
        <div>
          <div className='Line bg-[#d1cccc] h-0.5 w-full mt-12 mb-8'></div>
          <div className='flex justify-center items-center gap-3'>
            <p>© Sep 2024 Bola Salah</p>
            <Link href={"https://github.com/BolaSalah"} target="_blank">
                <Image src={assets.github_icon} alt='github' className='w-10' />
            </Link>
            <Link href={"https://www.linkedin.com/in/bola-salah/"} target="_blank">
                <Image src={assets.linkedin_icon} alt='github' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
