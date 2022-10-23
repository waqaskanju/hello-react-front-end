import axios from 'axios';

// Actions for success and error.
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';
const GET_GREETING_ERROR = 'GET_GREETING_ERROR';

// Action Creators for greeting.
const greetings= []

// on success
const getGreetingsSuccess = () => ({
  type: GET_GREETING_SUCCESS,
  payload: greetings,
});

// On Error.
const getGreetingsError = () => ({
  type: GET_GREETING_ERROR,
  payload: 'error fetching greetings',
});

// Api class Thunk Creators
const getGreeting = () => async (dispatch) => {
  const response = await axios.get(
    'http://localhost:3000/api/v1/greetings',
  );
  // response of api
  const greetings = response.data;

  // dispatch on success.
  dispatch({
    type: GET_GREETING_SUCCESS,
    payload: greetings,
  });
};

// assigning reducer
const reducer = (state = greetings, action) => {
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return {
        ...state,
        greetings: action.payload,
      };
    case 'GET_GREETING_ERROR':
      return {
        ...state,
        greetings: action.payload,
      };
    default:
      return state;
  }
};

// exporting reducer, greeting , onsucess and on error 
export default reducer;
export {
  getGreetingsSuccess,
  getGreetingsError,
  getGreeting,
};