const initialState = {
  contacts: ["Ammar", "Ahmed", "Salem", "Aisha"],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact !== action.payload
        ),
      };
    case "REMOVE_ALL_CONTACTS":
      return {
        ...state,
        contacts: [],
      };
    case "RESET_CONTACTS":
      return {
        ...state,
        contacts: initialState.contacts,
      };
    default:
      return state;
  }
};

export default contactReducer;
