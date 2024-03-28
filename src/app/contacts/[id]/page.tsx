'use client';

import React, { useEffect, useState } from 'react';
import { useParams} from 'next/navigation';
import useContacts from '../../stateHooks/UseContacts';
import ContactCard from '../../components/ContactCard';
import  '../../styles/contactCard.module.css';
import { Contact } from '@/app/contact';


const ContactCardPage = () => {
  const {id} = useParams<{id:string}>();
  const { contacts, editContact } = useContacts();
  const [contact, setContact] = useState<Contact | null>(null);
 

  useEffect(() => {
    if (!id) return;
    const foundContact = contacts.find(c => c.id === id);
    setContact(foundContact || null);
  }, [id, contacts]);

  const handleEditContact = async (editedContact: Contact) => {
    if (!id) return;
    await editContact(id, editedContact);
    setContact(editedContact); // Update the local state with edited data
  };

  if (!contact) {    
    return <div>Contact not found!</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <div className='contact-details'>
        <ContactCard contact={contact} onEdit={handleEditContact} />
      </div>
    </div>
  );
};

export default ContactCardPage;