import React from "react";
import { GoogleLoginResponse } from "react-google-login";

interface Auth {
  user: GoogleLoginResponse | undefined;
  setUser: React.Dispatch<GoogleLoginResponse | undefined>;
}

const AuthContext = React.createContext<Auth | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<GoogleLoginResponse | undefined>(
    undefined
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext) as Auth;
