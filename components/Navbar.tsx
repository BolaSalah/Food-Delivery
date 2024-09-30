'use client';

import Image from 'next/image';
import { assets } from './../assets/assets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* navbar for large screen */}
      <div className='navbar'>
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
            <Link
              href={'about'}
              className={pathname === '/about' ? 'navBarLinActive' : ''}
            >
              about
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
            <Link href={'login'} className='navbar-right-register'>
              sign in
            </Link>
          </div>
        </div>
      </div>
      {/* navbar-mobile-screen */}
      <div className='mobile-nav'>
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
      </div>
    </>
  );
};

export default Navbar;
