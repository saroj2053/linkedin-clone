const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async (signupData) => {
    setLoading(true);
    try {
      const response = await signup(signupData);
    } catch (error) {
      console.log("Error in useSignup", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
