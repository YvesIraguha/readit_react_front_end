const initialState = {
  message: 'how are you doing?'
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ARTICLE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
};
