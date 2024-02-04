import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <h1>MMdb ⭐️</h1>
        </NavLink>
        <NavLink to="/myfavorites">
          <p>My favorites</p>
        </NavLink>
        <NavLink to="/add-new-movie">
          <p>add new movie</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
