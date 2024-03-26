'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useContacts from '../stateHooks/UseContacts';

const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <div>
      <h1>Contact List</h1>
      <div>
        {contacts.map(contact => (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <Image src={contact.avatar} alt={contact.name} width={100} height={100} />
            <Link href={`/contacts/${contact.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;