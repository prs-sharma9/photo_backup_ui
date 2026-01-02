import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function checkUser() {
      const savedUser = localStorage.getItem("photohub_user");
      if (savedUser) {
        console.log(savedUser);
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    }

    checkUser();
  }, []);

  const login = (userData) => {
    console.log(userData)
    setUser(userData);
    localStorage.setItem("photohub_user", userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("photohub_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
