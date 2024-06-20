import axios from "axios";
import { useState } from "react";
import { api } from "../protocol";
import { enqueueSnackbar } from "notistack";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async (loginData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/user/login`, loginData);
      console.log(response.data);

      // success notistack
      enqueueSnackbar(response.data.message, {
        variant: "success",
        autoHideDuration: 3000,
      });

      // saving data to localStorage
      localStorage.setItem(
        "activeUser",
        JSON.stringify({ user: response.data.user, token: response.data.token })
      );
      return true;
    } catch (error) {
      // error notistack
      console.log("Error in useLogin hook", error.response);
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
