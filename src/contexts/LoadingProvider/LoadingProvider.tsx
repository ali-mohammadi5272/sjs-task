import { createContext, useState } from "react";
import Loading from "../../components/Loading/Loading";
import {
  LoadingContextType,
  LoadingProviderPropsType,
} from "./loadingProvider.type";

export const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
);

const LoadingProvider: React.FC<LoadingProviderPropsType> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
