import Communication from "./Communications";
import config from "../config";

const UserService = {
  login(dispatch, data, history) {
    dispatch({
      type: "LOAD_LOGIN",
      payload: null,
    });

    console.log('config', config);
    Communication.postMethod(data)
      .then((response) => {
        if (response) {
          console.log('Login_Response', response);
          dispatch({
            type: "Success_Login",
            payload: response,
          });
           history.push('/users');
        }
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
};

export default UserService;
