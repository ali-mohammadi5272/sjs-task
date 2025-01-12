import { Dispatch, SetStateAction } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface LoadingProviderPropsType {
  children: React.ReactNode;
}

export type { LoadingContextType, LoadingProviderPropsType };
