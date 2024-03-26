'use client';

import React from 'react';
import { useParams,} from 'next/navigation';
import useContacts from '../../stateHooks/UseContacts';
import ContactCard from '../../components/ContactCard';

const ContactCardPage = () => {
  const id = useParams<{id:string}>();
  const { contacts } = useContacts();
  const contact = contacts.find(c => c.id === id.id);

  if (!contact) {
    console.log(... contacts);
    
    return <div>Contact not found!</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <ContactCard contact={contact} />
    </div>
  );
};

export default ContactCardPage;