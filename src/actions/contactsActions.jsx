export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const removeContact = (contactName) => {
  return {
    type: "REMOVE_CONTACT",
    payload: contactName,
  };
};

export const removeAllContacts = () => {
  return {
    type: "REMOVE_ALL_CONTACTS",
  };
};

export const resetContacts = () => {
  return {
    type: "RESET_CONTACTS",
  };
};
