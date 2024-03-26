'use client';

import React, { useState } from 'react';
import   useContacts  from '../stateHooks/UseContacts';
import Image from 'next/image';
import { Contact } from '../contact';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {


  const { editContact, deleteContact} = useContacts();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState<Contact>(contact);

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };
  const submitEdit = () =>
  {
    editContact(contact.id, editedContact);
    setIsEditing(false);
  }
  const submitDelete = () =>
  {
    deleteContact(contact.id)
  }
  const handleEditToggle = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" name="name" value={editedContact.name} onChange={handleChange} />
          <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
          <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
          <input type="text" name="birthday" value={editedContact.birthday} onChange={handleChange} />
          <button onClick={submitEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{contact.name}</h2>
          <Image src={contact.avatar} alt={contact.name} width={100} height={100} />
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Birthday: {contact.birthday}</p>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={submitDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
