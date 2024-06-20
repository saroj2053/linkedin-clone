import axios from "axios";
import { api } from "../protocol";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async (signupData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/user/signup`, signupData);
      console.log(response.data.user);
      enqueueSnackbar(response.data.message, {
        variant: "success",
        autoHideDuration: 3000,
      });
    } catch (error) {
      console.log("Error in useSignup", error);
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
