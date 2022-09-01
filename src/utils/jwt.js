const getToken = () => window.localStorage.getItem("user_token");
const setToken = (token) => window.localStorage.setItem("user_token", token);
const deleteToken = () => window.localStorage.removeItem("user_token");

export default {
  getToken,
  setToken,
  deleteToken
}
