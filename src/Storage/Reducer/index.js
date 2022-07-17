// import {
//   ACTION_CONNECT_USER,
//   ACTION_DISCONNECT_USER,
//   ACTION_MESSAGES_ADD,
//   ACTION_USERS,
// } from '../Action';

// const initialState = {
//   users: [],
//   messages: [],
// };

// export function rootReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case ACTION_USERS:
//       return {
//         ...state,
//         users: payload,
//       };
//     case ACTION_CONNECT_USER:
//       return {
//         ...state,
//         users: [...state.users, payload],
//       };
//     case ACTION_DISCONNECT_USER:
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== payload),
//       };
//     case ACTION_MESSAGES_ADD:
//       return {
//         ...state,
//         messages: [...state.messages, payload],
//       };
//     default:
//       return state;
//   }
// }
