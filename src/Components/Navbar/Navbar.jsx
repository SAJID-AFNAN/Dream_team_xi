import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={logo} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img className="hidden lg:block w-16 h-16" src={logo} alt="" />
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 flex items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <div>
              <a className="border border-gray-200 px-4 py-2 rounded-lg font-bold">0 coin</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
