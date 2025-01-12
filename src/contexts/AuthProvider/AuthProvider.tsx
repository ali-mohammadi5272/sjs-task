import { createContext, useState } from "react";
import { AuthContextType, AuthProviderPropsType } from "./AuthProvider.type";
import { UserType } from "../../models/user";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const [user, setUser] = useState<UserType>({} as UserType);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
