import { Dispatch, SetStateAction } from "react";
import { UserType } from "../../models/user";

interface AuthContextType {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}

interface AuthProviderPropsType {
  children: React.ReactNode;
}

export type { AuthContextType, AuthProviderPropsType };
