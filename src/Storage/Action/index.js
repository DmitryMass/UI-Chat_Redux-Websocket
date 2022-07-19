export const ACTION_USERS = 'ACTION_USERS';
export const ACTION_NEWUSER = 'ACTION_NEWUSER';
export const ACTION_MESSAGE = 'ACTION_MESSAGE';
export const ACTION_MESSAGES = 'ACTION_MESSAGES';

export const ACTION_WS = 'ACTION_WS';

export function addUser(user) {
  return { type: ACTION_USERS, payload: user };
}

export function newUser(user) {
  return { type: ACTION_NEWUSER, payload: user };
}

export function textAreaMessage(message) {
  return { type: ACTION_MESSAGE, payload: message };
}

export function setAllMessagesInfo(messages) {
  return { type: ACTION_MESSAGES, payload: messages };
}
