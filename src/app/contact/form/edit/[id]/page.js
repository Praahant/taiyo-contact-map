'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { editUser } from '../../../../redux/slice';

const EditContactForm = (param) => {

    const router = useRouter();
    const dispatch = useDispatch();

    //get all data
    const contacts = useSelector((data) => data.users);
    //get id from params
    const id = param.params.id;

    //get data from redux store
    const olddata = contacts.filter(contact => contact.id === id);
     

    const [name, setName] = useState( olddata[0].name );
    const [lastName, setLastName] = useState( olddata[0].lname);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            lastName: lastName
        }
        dispatch(editUser(data));
        setName('');
        setLastName('');
        router.push('/contact');
    };

    return (
        <div className='text-black p-6 mt-8 max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-300'>
            <h1 className='text-center text-xl font-semibold mb-4'>Add Contact</h1>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className='block text-sm font-medium text-gray-700' htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700' htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className='mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                    Edit Contact
                </button>
            </form>
        </div>
    );
};

export default EditContactForm;
