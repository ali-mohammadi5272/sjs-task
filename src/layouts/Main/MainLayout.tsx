import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import axios from "../../services/axios";
import { getCookie } from "../../utils/helperFunctions";
import { tokens } from "../../utils/constants";
import { UserType } from "../../models/user";

const MainLayout = (): React.ReactNode => {
  const { setUser } = useContext(AuthContext);

  const getUser = async () => {
    const accessToken: string = getCookie(tokens.ACCESS_TOKEN);

    const response = await axios.get<UserType>(
      "https://dummyjson.com/user/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      setUser(response.data);
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
