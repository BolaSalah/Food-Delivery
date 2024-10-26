"use client"
import React, { useState } from 'react';
// import { IoAlertOutline } from 'react-icons/io5';
import { registerUser } from '../../../services/auth';
import { auth } from "../../../services/firebase";
import {updateProfile} from 'firebase/auth';
import { useRouter } from 'next/navigation';

const Signin = () => {

  const router = useRouter();

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPass, setClientPass] = useState('');

  // value handler
  const nameHandler = (e:any) => {
    setClientName(e.target.value);
  }
  const emailHandler = (e:any) => {
    setClientEmail(e.target.value);
  };
  const passHandler = (e:any) => {
    setClientPass(e.target.value);
  };

  // form handle
  const registerHandler = async (e:any) => {
    e.preventDefault();
    console.log(clientEmail,clientPass)
      try {
        await registerUser(clientEmail, clientPass).then(async (userCred) => {
          const user = userCred.user;
          updateProfile(user, {
            displayName: clientName,
          });
          const currentUser = auth.currentUser;

          if (currentUser) {
            localStorage.setItem('tokens', currentUser.accessToken);
            console.log(currentUser.accessToken);
            router.push('/');
          } else {
            console.error('No user is currently authenticated.');
          }
        });
      } catch (err: unknown) {
        // Check if 'err' is an instance of Error
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log('An unknown error occurred');
        }
      }
  };

return (
  <div className='w-full flex flex-col items-center'>
    <form // width or max width
      className=' max-w-[348px]  mx-auto mt-1.5 flex flex-col items-center mb-4'
      onSubmit={(e) => {
        registerHandler(e);
      }}
    >
      <div className='border border-zinc-200 py-2 px-4 w-full rounded-lg'>
        <h2 className='font-[490] text-[28px] mb-3 mx-0.5'>Create account</h2>
        <div className='flex flex-col gap-3'>
          {/* name input */}
          <div className='flex flex-col'>
            <p className='font-[650] text-[13px] mb-0.5 mx-1'>Your name</p>
                <input
                  onChange={nameHandler}
                  type='text'
              autoFocus
              // value={clientName}
                  placeholder='First and last name'
                  className='w-full py-0.5 p-2 mx-0.5 border text-[15px]
                    border-zinc-400 outline-none 
                      rounded-[3px] font-amazone
                      focus-within:shadow-amazoneInput duration-100
                    focus-within:border-amazoneInput' />
          </div>
          {/* email input */}
          <div className='flex flex-col gap-1'>
            <p className='font-[650] text-[13px] mx-0.5'>{("Email")}</p>
                <input
                  onChange={emailHandler}
                  type='text'
                  placeholder='example@gmail.com'
                  className='w-full p-2 py-0.5 mx-0.5 border border-zinc-400 outline-none 
                            rounded-[3px] focus-within:shadow-amazoneInput duration-100
                           focus-within:border-amazoneInput'
                />
          </div>
          {/* password input */}
          <div className='flex flex-col'>
            <p className='font-[650] text-[13px] mb-0.5 mx-1'>{("Password")}</p>
                <input
                  onChange={passHandler}
                  type='password'
                  placeholder='At least 6 characters'
                  className='w-full p-2 py-0.5 mx-0.5 border border-zinc-400 outline-none 
                            rounded-[3px] focus-within:shadow-amazoneInput duration-100
                           focus-within:border-amazoneInput'
                />
                <div className='flex items-center space-x-1 mt-2'>
                  {/* <span className=' text-[#4e74a7] text-[15px]'>
                    <IoAlertOutline />
                  </span> */}
                  <span className='text-xs'>
                  {("Passwords must be at least 6 characters.")}
                  </span>
                </div>
          </div>
         
         {/* submit btn */}
          <div
            className='rounded-lg mx-0.5 mt-1 text-sm flex items-center h-8
              bg-[#FFD814] border border-[#FCD200] 
              hover:bg-[#F7CA00] hover:border-[#F2C200] hover:cursor-pointer
              active:bg-[#F0B800] active:border-[#008296] active:shadow-continueButton'
          >
            <input
              type='submit'
              className='w-full z-10 hover:cursor-pointer text-[13px]'
              value={'Continue'}
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);
};

export default Signin;