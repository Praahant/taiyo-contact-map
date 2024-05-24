// 'use client';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeUser, editUser } from '../redux/slice';

// import { useRouter } from 'next/navigation';

// const ContactList = () => {
//     const contacts = useSelector((data) => data.users);
//     const dispatch = useDispatch();

//     const router = useRouter();

//     return (
//         <div className='p-4 '>
//             {contacts.map((contact) => (
//                 <div key={contact.id} className='bg-black p-4 m-2 flex-grid rounded'>
//                     {console.log(contact.name)}
//                     <h1 className='py-2'>{contact.name}</h1>
//                     <div>
//                         <button className='mr-2 bg-green-700 rounded px-2 py-1 hover:bg-green-600' onClick={() => router.push(`/contact/form/edit/${contact.id}`)}>Edit</button>
//                         <button className='ml-2 bg-red-500 rounded px-2 py-1 hover:bg-red-400' onClick={() => dispatch(removeUser(contact.id))}>Delete</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ContactList;
