import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import axios from "../../services/axios";
import { getCookie } from "../../utils/helperFunctions";
import { messages, tokens } from "../../utils/constants";
import { UserType } from "../../models/user";
import { toast } from "react-toastify";
import { LoadingContext } from "../../contexts/LoadingProvider/LoadingProvider";

const MainLayout = (): React.ReactNode => {
  const { setUser } = useContext(AuthContext);
  const { setIsLoading } = useContext(LoadingContext);

  const getUser = async () => {
    const accessToken: string = getCookie(tokens.ACCESS_TOKEN);

    setIsLoading(true);

    try {
      const response = await axios.get<UserType>("/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      toast.error(messages.LOGIN.ERR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
