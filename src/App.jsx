import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import defaultContactList from '../contact-list.json'
import { useState, useEffect } from 'react';

const App = () => { 
    const savedData = JSON.parse(localStorage.getItem('data'));

    const [contacts, setContacts] = useState(savedData || defaultContactList);
    const [searchData, setSearchData] = useState("")
    
    const visibleContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()));

    const addContact = (data) => {
        setContacts(prev => [...prev, data]);
    }
    
    const deleteContact = (id) => {
        setContacts(prev => prev.filter(item => item.id !== id));
    }

    useEffect(() => {
       localStorage.setItem('data', JSON.stringify(contacts)) 
    }, [contacts]);

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox
                searchData={searchData}
                setSearchData={setSearchData} />
            <ContactList
                contactList={visibleContacts}
                deleteContact={deleteContact} />
        </>
    );
};
export default App;