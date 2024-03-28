'use client';

import { useState, useEffect } from 'react';

import { Contact, NewContact } from '../contact';

const useContacts = () => {
  const baseURL = 'https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/';
  const [contacts, setContacts] = useState<Contact[]>([]);
  const fetchContacts = async () => {
    try {
      const response = await fetch(baseURL);
      const data: Contact[] = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (newContact: NewContact) => {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const editContact = async (id: string, editedContact: Contact) => {
    try {
      await fetch(baseURL+{id}, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedContact),
      });
     fetchContacts();
    } catch (error) {
      console.error('Error editing contact:', error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await fetch(baseURL+id, {
        method: 'DELETE',
      });
      fetchContacts();
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
