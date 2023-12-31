const initialState = {
    contacts: [],
  };
  
  const PhonebookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'DELETE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default PhonebookReducer;
  