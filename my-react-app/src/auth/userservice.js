import { SET_MESSAGE } from "./type";

export const UserService = (message) => ({
  type: SET_MESSAGE,
  payload:message,
});