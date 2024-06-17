import axios from "axios";
import { useState } from "react";
import { api } from "../protocol";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async (loginData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/user/login`, loginData);
      console.log(response.data.user);
    } catch (error) {
      console.log("Error in useLogin hook", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
