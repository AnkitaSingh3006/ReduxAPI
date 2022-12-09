import Communication from "./Communications";
import config from "../config";

const UserService = {
  login(dispatch, data) {
    dispatch({
      type: "LOAD_LOGIN",
      payload: null,
    });

    Communication.getMethod(config.endPoints.users, data)
      .then((response) => {
        console.log('Login_Response', response);
        dispatch({
          type: "Success_Login",
          payload: response,
        });
      })

      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: "ERROR_LOGIN",
          payload: null,
        });
      })

      .finally(() => {});
  },
};

export default UserService;
