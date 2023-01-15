import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          |
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
