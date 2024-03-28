export interface Contact {
    createdAt: string;
    name: string;
    avatar: string;
    email: string;
    phone: string;
    birthday: string;
    id: string;
}

export interface NewContact extends Omit<Contact, 'id'>{}
