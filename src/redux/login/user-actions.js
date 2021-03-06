import auth from "../../firebase/config-utils";

export const setCurrentRegister = event => {
  return {
    type: "SET_CURRENT_REGISTER",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const setCurrentLogin = event => {
  return {
    type: "SET_CURRENT_LOGIN",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const register = () => {
  return (dispatch, getState) => {
    let { email, password } = getState().user.currentRegister;
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };
};
