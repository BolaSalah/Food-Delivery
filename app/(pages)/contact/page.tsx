'use client';
import React, { useState, useEffect, useRef } from 'react';
import { assets } from './../../../assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidContact } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa';

interface IElement {
  data: string;
}
interface IContact extends IElement {
  link: string;
}

const contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const contactData: IElement[] = [
    { data: 'mon - fri : 7 am - 9 pm' },
    { data: 'saturday : 2 pm - 9 pm' },
    { data: 'sunday : Closed' },
  ];
  const ContactUsArray: IContact[] = [
    { data: '01202554039', link: 'https://wa.me/+2001202554039' },
    { data: 'Bolasalah1999@gmail.com', link: 'mailto:bolasalah1999@gmail.com' },
    {
      data: 'El Nozha 2 - Cairo',
      link: 'https://maps.google.com/?q=30.1427316 31.3754579',
    },
  ];

  // send email to me
  const notify = () => toast('Thanks, we received your message');
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      try {
        emailjs.sendForm('service_h9bnen1', 'template_ejnmuy9', form.current, {
          publicKey: 'bHJcqMModNrqGVFeu',
        });
        console.log('Email sent successfully!');
        notify();
        setUserName('');
        setUserEmail('');
        setUserMessage('');
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    }
  };

  return (
    <div className='contact'>
      <div className={`contact-container-hero`}>
        <Image
          src={assets.contact_q}
          alt='contact-container-hero-img'
          className='contact-container-hero-img'
        />
        <div className='contact-container-hero-question'>
          <h1>How can we help?</h1>
        </div>
      </div>

      <div className='contact-data'>
        {/* left => contact us */}
        <div className='contact-data-details'>
          <div className='contact-data-details-container'>
            <BiSolidContact className='contact-data-details-container-icon' />
            <h1 className='contact-data-details-container-word'>Contact Us</h1>
            {ContactUsArray.map((item, index) => (
              <div key={index}>
                <Link href={`${item.link}`} target='_blank'>
                  <p className='contact-data-details-container-item'>
                    {item.data}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* center => form */}
        <div className='contact-container-form'>
          <form className='contact-form'>
            <h1 className='contact-form-title'>
              Get <span className='contact-form-title-in'>in</span> touch
            </h1>
            <div className='contact-form-contianer-inputs'>
              <label className='contact-form-contianer-label'>Name</label>
              <input
                type='text'
                name='user_name'
                className='contact-form-contianer-input'
                required
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <label className='contact-form-contianer-label'>Email</label>
              <input
                type='email'
                name='user_email'
                className='contact-form-contianer-input'
                required
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <label className='contact-form-contianer-label'>Message</label>
              <textarea
                name='message'
                className='contact-form-contianer-area'
                required
                value={userMessage}
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
              />
              <input
                type='submit'
                value='Send'
                className='contact-form-contianer-submit'
              />
              <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
              />
            </div>
          </form>
        </div>

        {/* right =>  Working Hours */}
        <div className='contact-data-details'>
          <div className='contact-data-details-container'>
            <FaClock className='contact-data-details-container-icon' />
            <h1 className='contact-data-details-container-word'>
              Working Hours
            </h1>
            {contactData.map((item, index) => (
              <div key={index}>
                <p className='contact-data-details-container-item'>
                  {item.data}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
