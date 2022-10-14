export const addContact = () => {
  return {
    type: "ADD_CONTACT",
    payload: [
      {
        id: contacts[contacts.length - 1].id + 1,
        name: name,
        email: email,
        number: number,
      },
    ],
  };
};
