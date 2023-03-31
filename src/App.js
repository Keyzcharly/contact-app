import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { v4 } from 'uuid';
import {Switch, Route} from 'react-router-dom';
import ContactDetails from './components/ContactDetails';


function App() {

  const LOCAL_STORAGE_KEY  = 'contacts';

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: v4(), ...contact}]);
  };
 
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
;    });
      setContacts(newContactList);
  }

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) {
  //     setContacts(retriveContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
        <Header />
        <Switch>
          <Route path='/add' render={(props) => (<AddContact {...props }  addContactHandler={addContactHandler}/>)} />
          <Route path='/' exact={true} render={(props) => (<ContactList {...props } contacts={contacts} getContactId={removeContactHandler} />)} />
          <Route path='/contact/:id' component={ContactDetails} />
        </Switch>
        
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}

    </div>
  );
}

export default App;
