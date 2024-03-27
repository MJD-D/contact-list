'use client';

import React, { useState } from 'react';
import   useContacts  from '../stateHooks/UseContacts';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Contact } from '../contact';
import styles from '../styles/contactCard.module.css';

interface ContactCardProps {
  contact: Contact;
  onEdit: (editedContact: Contact) => void;
}

const ContactCard = ({ contact, onEdit }: ContactCardProps) => {
  const router = useRouter();

  const { deleteContact} = useContacts();
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
    onEdit(editedContact)
    setIsEditing(false);
  }
  const submitDelete = () =>
  {
    deleteContact(contact.id)
    router.back();
  }
  const handleEditToggle = () => {
    setIsEditing(true);
  };

  return (
   
<div className={styles['contact-card']}>
<h2>{contact.name}</h2>
<Image src={contact.avatar} alt={contact.name} width={200} height={200} />
{isEditing ? (
  <div className={styles['edit-section']}>
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={editedContact.name} onChange={handleChange} />
    </div>
    <div>
      <label>Avatar:</label>
      <input type="text" name="avatar" value={editedContact.avatar} onChange={handleChange} />
    </div>
    <div>
      <label>Email:</label>
      <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
    </div>
    <div>
      <label>Birthday:</label>
      <input type="text" name="birthday" value={editedContact.birthday} onChange={handleChange} />
    </div>
    <button className={styles.button} onClick={submitEdit}>Save</button>
  </div>
) : (
  <div className={styles['details-section']}>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
    <p>Birthday: {contact.birthday}</p>
    <button className={styles.button} onClick={handleEditToggle}>Edit</button>
    <button className={styles.button} onClick={submitDelete}>Delete</button>
  </div>
)}
</div>
  );
};

export default ContactCard;
