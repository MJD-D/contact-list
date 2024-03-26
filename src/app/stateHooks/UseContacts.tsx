'use client';

import { useState, useEffect } from 'react';

import { Contact } from '../contact';

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/');
        const data: Contact[] = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const addContact = async (newContact: Contact) => {
    try {
      const response = await fetch('https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      const data: Contact = await response.json();
      setContacts(prevContacts => [...prevContacts, data]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const editContact = async (id: string, editedContact: Contact) => {
    try {
      await fetch(`https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedContact),
      });
      setContacts(prevContacts =>
        prevContacts.map(contact => (contact.id === id ? editedContact : contact))
      );
    } catch (error) {
      console.error('Error editing contact:', error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await fetch(`https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/${id}`, {
        method: 'DELETE',
      });
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return {
    contacts,
    addContact,
    editContact,
    deleteContact,
  };
};

export default useContacts;
