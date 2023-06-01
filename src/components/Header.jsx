import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo-the-foodies.png";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-pink-300 text-primary-content justify-between px-10">
        <div>
          <Link to={"/"}>
            <img className="w-32 rounded" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          <Link to={"/blog"} className="btn btn-ghost normal-case text-xl">
            Blog
          </Link>
        </div>
        <div>
          <div>
            {user ? (
              <>
                <span> {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="border  btn btn-ghost normal-case text-xl"
                >
                  Log Out
                </button>
              </>
            ) : (
              <button className="border">
                <Link
                  to={"/login"}
                  className="btn btn-ghost normal-case text-xl"
                >
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
