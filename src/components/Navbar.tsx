import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex gap-8 items-center">
        <div className="navbar-brand">
          <Link className="text-2xl text-white" to="/">
            Movie DB
          </Link>
        </div>
        <div className="navbar-links flex gap-4">
          <Link className="text-white" to="/">
            Home
          </Link>
          <Link className="text-white" to="/favourites">
            Favourites
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
