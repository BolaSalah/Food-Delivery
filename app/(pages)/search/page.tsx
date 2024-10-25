"use client"
import { food_list } from '../../../assets/assets';
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';


const search = () => {
    const [bola,setBola]=useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBola(e.target.value);
    };
      const highlightText = (text: string) => {
        const regex = new RegExp(`(${bola})`, 'gi'); // Create a regex to match the search term
        const parts = text.split(regex); // Split the text by the search term
          return parts.map( ( part, index ) =>
          part.toLowerCase() === bola.toLowerCase() ? (
            <span key={index} className='text-yellow-500 font-bold'>
              {part}
            </span>
          ) : (
            part
          )
        );
      };
  return (
    <div className='w-full'>
      <input
        type='text'
        onChange={(e) => handleSearch(e)}
        className='bg-slate-300 py-4 px-2 my-10'
      />
      <div className='flex flex-wrap '>
        {food_list.map((e, ind) => (
            <React.Fragment key={ind}>
            {e.name.toLowerCase().includes(bola.toLowerCase()) && (
          <div className='md:w-1/4 sm:w-1/3 w-[200px] px-3 mb-10'>
                <div className='rounded-xl overflow-hidden border'>
                  <Image src={e.image} alt='' className='w-full' />
                  <div className='px-4'>
                    <p className={`mt-4 font-bold`}> {highlightText(e.name)}</p>
                    <p className='my-2'>{e.description}</p>
                    <p className='mb-3 font-bold text-red-400'>${e.price}</p>
                  </div>
                </div>
          </div>
            )}

          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default search;
