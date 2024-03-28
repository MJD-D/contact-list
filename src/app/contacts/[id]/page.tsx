'use client';

import React, { useMemo } from 'react';
import { useParams} from 'next/navigation';
import useContacts from '../../stateHooks/UseContacts';
import ContactCard from '../../components/ContactCard';
import  '../../styles/contactCard.module.css';
import { Contact } from '@/app/contact';


const ContactCardPage = () => {
  const {id} = useParams<{id:string}>();
  const { contacts, editContact } = useContacts();
 

  const contact = useMemo(() => {
    if (!id) return null;
    return contacts.find(c => c.id === id) ?? null;
  }, [id, contacts]);

  const handleEditContact = async (editedContact: Contact) => {
    if (!id) return;
    await editContact(id, editedContact);
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