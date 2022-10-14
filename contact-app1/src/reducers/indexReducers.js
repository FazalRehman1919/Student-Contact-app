const initialState = [
  {
    id: 0,
    name: "Waqas Ahmad",
    email: "wekibangash19@gmail.com",
    number: parseInt("03038004467"),
  },
  {
    id: 1,
    name: "Fazal Rehman ",
    email: "fazal19@gmail.com",
    number: parseInt("03048004467"),
  },
];

const indexReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};

export default indexReducers;
