import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ContactForm = ({ onSave, onCancel, initialContact }) => {
  const [name, setName] = useState(initialContact ? initialContact.name : '');
  const [company, setCompany] = useState(initialContact ? initialContact.company : '');
  const [email, setEmail] = useState(initialContact ? initialContact.email : '');
  const [phone, setPhone] = useState(initialContact ? initialContact.phone : '');
  const [tag, setTag] = useState(initialContact ? initialContact.tag : '');

  const handleSubmit = () => {
    const contact = {
      id: initialContact ? initialContact.id : null,
      name,
      company,
      email,
      phone,
      tag,
    };
    onSave(contact);
  };

  return (
    <Dialog open onClose={onCancel} fullWidth>
      <DialogTitle>{initialContact ? 'Edit Contact' : 'New Contact'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactForm;
