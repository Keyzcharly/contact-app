import React from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

const ContactList = (props) => {

  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
    );
  })

  return (
    <div className='main top' style={{paddingTop: '15%'}}>
      <h3>
        Contact List
        <Link to='/add' >
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h3>
      <div className='ui celled list' style={{paddingTop: '4%'}}>{renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
    </div>
    
  )
}

export default ContactList