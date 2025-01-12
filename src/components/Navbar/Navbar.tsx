import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import { NavbarLinkType } from "./navbar.types";
import { memo, useContext } from "react";
import { logout, showAlert } from "../../utils/helperFunctions";
import { messages } from "../../utils/constants";
import Container from "../Container/Container";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Navbar = (): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();
  const { user } = useContext(AuthContext);
  const links: NavbarLinkType[] = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Dashboard",
      to: "/dashboard",
    },
  ];

  const logoutHandler = async () => {
    const result = await showAlert({
      title: "Logout",
      text: messages.LOGOUT.CONFIRMATION,
      icon: "warning",
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      logout(navigate);
      showAlert({
        title: "Logout",
        text: messages.LOGOUT.SUCCESS,
        icon: "success",
      });
    }
  };

  return (
    <nav className="py-2 bg-dark">
      <Container>
        <div className="flex justify-between items-center px-5">
          <section className="w-[20%]">
            <h3 className="text-danger font-semibold">{user?.username}</h3>
          </section>
          <section className="flex w-[60%]">
            {links.map((link) => (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `text-light font-semibold p-2
                    ${isActive ? "text-danger" : ""}
                  `
                }
                to={link.to}
              >
                {link.title}
              </NavLink>
            ))}
          </section>
          <section className="text-right">
            <button
              onClick={logoutHandler}
              className="text-danger font-semibold border-2 border-danger py-1 px-3 rounded-lg hover:bg-danger hover:text-light"
            >
              logout
            </button>
          </section>
        </div>
      </Container>
    </nav>
  );
};

export default memo(Navbar);
