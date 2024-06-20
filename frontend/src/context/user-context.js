import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem("activeUser")) || null;

  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
