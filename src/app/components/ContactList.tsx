'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useContacts from '../stateHooks/UseContacts';
import styles from '../styles/contactList.module.css';
import Link from 'next/link';


const ContactList = () => {
  const router = useRouter();
  const { contacts } = useContacts();

  const handleViewDetails = (id: string) => {
    router.push(`/contacts/${id}`);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <div>
        <Link href="/addContact" className={styles['add-button']}>
          Add New Contact
        </Link>
      </div>
      <div className={styles['contact-list']}>
        {contacts.map(contact => (
          <div key={contact.id} className={styles['contact-item']}>
            <h2>{contact.name}</h2>
            <Image src={contact.avatar} alt={contact.name} width={100} height={100} />
            <button onClick={() => handleViewDetails(contact.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;