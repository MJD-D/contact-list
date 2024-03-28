'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useContacts from '../stateHooks/UseContacts';
import { NewContact } from '../contact';

const AddContactPage = () => {
  const router = useRouter();
  const { addContact } = useContacts();
  const [newContact, setNewContact] = useState<NewContact>({
    createdAt: '',
    name: '',
    avatar: '',
    email: '',
    phone: '',
    birthday: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addContact(newContact);
    router.push('/'); // Navigate back to the contact list page after adding contact
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
        </label>
        <label>
          Avatar:
          <input type="text" name="avatar" value={newContact.avatar} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={newContact.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} />
        </label>
        <label>
          Birthday:
          <input type="text" name="birthday" value={newContact.birthday} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContactPage;