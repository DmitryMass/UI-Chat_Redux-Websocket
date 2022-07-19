import {
  ACTION_MESSAGE,
  ACTION_MESSAGES,
  ACTION_NEWUSER,
  ACTION_USERS,
} from '../Action';

const initialState = {
  user: '',
  newUser: [],
  messages: [],
  message: '',
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_USERS:
      return {
        ...state,
        user: payload,
      };
    case ACTION_NEWUSER:
      return {
        ...state,
        newUser: [...state.newUser, payload],
      };
    case ACTION_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case ACTION_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    default:
      return state;
  }
}
