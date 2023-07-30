import React from "react";
import { connect } from "react-redux";
import {
  removeContact,
  removeAllContacts,
  resetContacts,
} from "../actions/contactsActions";
import "./css/ContactsApp.css";
const ContactApp = ({
  contacts,
  removeContact,
  removeAllContacts,
  resetContacts,
}) => {
  return (
    <div className="contact-app">
      <h1 className="contact-title">Contact App</h1>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact} className="contact-item">
            <span>{contact}</span>
            <button
              onClick={() => removeContact(contact)}
              className="btn-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="buttons-section">
        <button onClick={removeAllContacts} className="btn">
          Remove All Contacts
        </button>
        <button onClick={resetContacts} className="btn">
          Reset Contacts
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.contacts.contacts); // Log the contacts variable
  return {
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = {
  removeContact,
  removeAllContacts,
  resetContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp);
