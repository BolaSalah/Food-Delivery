import { menu_list } from './../assets/assets';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type propsType = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const Menu = (props: propsType) => {
  return (
    <div className='menu mt-10' id='menu'>
      <div className='text-4xl font-medium mb-4'>Explore our menu</div>
      <div className='md:w-2/3'>
        Choose from a diverse menu featuring a delectable array of dishes. our
        mission is to satisfy your cravings and elevate your during experience,
        one delicious meal at a time.
      </div>
      <div className='flex justify-between items-center gap-7 mt-8 overflow-x-scroll lg:overflow-hidden'>
        {menu_list.map((e, index) => (
          <div
            onClick={() =>
              props.category === e.menu_name
                ? props.setCategory('All')
                : props.setCategory(e.menu_name)
            }
            key={index}
            className='flex flex-col items-center '
          >
            <Image
              src={e.menu_image}
              alt={e.menu_name}
              className={`mb-2 cursor-pointer min-w-20 rounded-full ${
                props.category === e.menu_name ? 'border-4 border-black' : ''
              }`}
            />
            <p>{e.menu_name}</p>
          </div>
        ))}
      </div>
      <div className='h-0.5 bg-[#e2e2e2] my-10'></div>
    </div>
  );
};

export default Menu;
