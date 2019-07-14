export const chat = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER": {
      const { id, data } = action.payload;
      const newUser = { id, ...data };
      return [...state, newUser];
    }

    default:
      return state;
  }
}
