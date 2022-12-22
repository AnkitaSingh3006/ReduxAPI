import Communication from "./Communications";
import config from "../config";
import { configuration } from "../config";

const UserService = {
  login(dispatch, data, navigate) {
    dispatch({
      type: "LOAD_LOGIN",
      payload: null,
    });

    console.log('config', config);
    Communication.postMethod(data)
      .then((response) => {
        console.log('Login_Response', response);
        localStorage.setItem('login', response.token)
        dispatch({
          type: "Success_Login",
          payload: response,
        });
        navigate('/users')
      })

      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: "ERROR_LOGIN",
          payload: null,
        });
      })

      .finally(() => { });
  },

  loadUsers(dispatch,userData) {
    dispatch({
      type: "LOAD_USERS",
      payload: null,
    });
    
    console.log('configuration', configuration);
    Communication.getMethod(userData)
      .then((result) => {
        dispatch({
          type: "GET_USERS",
          payload: result,
        });
      })

      .catch(() => {
        dispatch({
          type: "ERROR_USERS",
          payload: null,
        });
      })

      .finally(() => { });
  },
};

export default UserService;
