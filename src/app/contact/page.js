import React from 'react'
import Link from 'next/link'
import ContactList from './ContactList';
export default function Contact() {
  return (
    <div className='m-auto w-fit'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>Contact Page</h1>
      <div className='m-auto w-fit'>
        <Link href='/contact/form' className='bg-green-500 px-4 py-2  rounded  hover:bg-green-600'>
          Create Contact
        </Link>
      </div>
        <div className='grid grid-cols-1 gap-4'>
          <ContactList/>
        </div>

    </div>
  )
}


