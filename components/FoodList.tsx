import React from 'react';
import Image from 'next/image';
import { food_list } from './../assets/assets';

const FoodList = (props: { category: string }) => {
  return (
    // <div className="my-20 px-5">FoodList {props.category}</div>
    <>
      <div className='Food-list'>
        <div>
          <div className='mb-8 font-bold text-2xl sm:block flex justify-center'>
            <h1>Top dishes near you</h1>
          </div>
          {props.category === 'All' ? (
            <div className='flex flex-wrap justify-center'>
              {food_list.map((e, index) => (
                <div
                  className='md:w-1/4 sm:w-1/3 w-[200px] px-3 mb-10'
                  key={index}
                >
                  <div className='rounded-xl overflow-hidden border'>
                    <Image src={e.image} alt='' className='w-full' />
                    <div className='px-4'>
                      <p className='mt-4 font-bold'>{e.name}</p>
                      <p className='my-2'>{e.description}</p>
                      <p className='mb-3 font-bold text-red-400'>${e.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex flex-wrap '>
              {food_list.map(
                (e, index) =>
                  e.category === props.category && (
                    <div className='w-1/4 px-3 mb-10'>
                      <div className='rounded-xl overflow-hidden border'>
                        <Image src={e.image} alt='' />
                        <div className='px-4'>
                          <p className='mt-4 font-bold'>{e.name}</p>
                          <p className='my-2'>{e.description}</p>
                          <p className='mb-3 font-bold text-red-400'>
                            ${e.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodList;
