import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {

    const {id, name, email } = props.contact;
  return (

        <div className="ui divided items">
          <div className="item">
            <img className="ui avatar image" src={user} alt='user' />
            <div className="content">
              <Link to={{pathname: `/contact/${id}`, state: {contact: props.contact}}} >
                <div className='header'>{name}</div>
                <div>{email}</div>
              </Link>
              <i className="ui right floated trash alternate outline icon"
              style={{color: 'red', marginBottom: '11px'}}
              onClick={() => props.clickHandler(id)}></i>
            </div>
          </div>
        </div>
  )
}

export default ContactCard