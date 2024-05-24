// import React from 'react'
// import Link from 'next/link'
// import ContactList from './ContactList';
// export default function Contact() {
//   return (
//     <div className='m-auto w-fit '>
//       {/* <h1 className='text-black'>Contact</h1> */}
//       <Link href='/contact/form' className='bg-green-500 px-4  py-2 rounded'>
//         Create Contact
//       </Link>
//         <div className='grid grid-cols-1 gap-4'>
//           <ContactList/>
//         </div>

//     </div>
//   )
// }
'use client'
import React, { useState } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ContactForm from '../component/ContactForm';

const initialContacts = [
  { id: 1, name: 'Jane Smith', company: 'ABC Inc', email: 'jane.smith@gmail.com', phone: '123-456-7890', tag: 'customer' },
  { id: 2, name: 'John Doe', company: 'XYZ LLC', email: 'john.doe@gmail.com', phone: '234-567-8901', tag: 'lead' },
  { id: 3, name: 'Bob Johnson', company: '123 Co', email: 'bob.johnson@gmail.com', phone: '345-678-9012', tag: 'prospect' },
  { id: 4, name: 'Sally Kim', company: '456 Corp', email: 'sally.kim@gmail.com', phone: '456-789-0123', tag: 'partner' },
  { id: 5, name: 'David Lee', company: '789 Ltd', email: 'david.lee@gmail.com', phone: '567-890-1234', tag: 'vendor' },
];

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [isAdding, setIsAdding] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSave = (contact) => {
    if (editingContact) {
      setContacts(contacts.map(c => c.id === contact.id ? contact : c));
      setEditingContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    }
    setIsAdding(false);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Contactssss</h1> */}
      <div className="mb-4">
        
        <Button variant="contained" color="primary" onClick={() => setIsAdding(true)}>
          New Contact
        </Button>
      </div>
      {isAdding && (
        <ContactForm
          onSave={handleSave}
          onCancel={() => setIsAdding(false)}
          initialContact={editingContact}
        />
      )}


      <div className=''>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.tag}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(contact)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(contact.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default ContactsPage;