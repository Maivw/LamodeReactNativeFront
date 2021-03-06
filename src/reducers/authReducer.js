import * as actionTypes from '../actions/actionTypes';

const initialAuthState = {
  user: 'hello@cee',
  token: '',
  me: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      console.log(action);
      /**
       *  {
            type: actionTypes.SET_AUTH,
            detail: detail,
          };
       */
      return {...state, token: action.token};
    case actionTypes.SET_ME:
      return {...state, me: action.user};
    case actionTypes.REMOVE_AUTH:
      return initialAuthState;

    default:
      return state;
  }
};
