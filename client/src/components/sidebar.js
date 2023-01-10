import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    console.log(`LOGOUT`)
    navigate("/login");
  };
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1029px-UNIQLO_logo.svg.png"
            alt="profile_picture"
          ></img>
          <h3>Admin</h3>
        </div>
        <ul className="downSide">
          <Link to="/">
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-desktop"></i>
              </span>
              <span className="item">Dashboard</span>
            </a>
          </li>
          </Link>
          <NavLink to="categories">
          <li>
            <a href="">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">Categories</span>
            </a>
          </li>
          </NavLink>
          <NavLink to="register">
          <li>
            <a href="">
              <span className="icon">
                <i className="fas fa-database"></i>
              </span>
              <span className="item">Register Admin</span>
            </a>
          </li>
          </NavLink>
          <li>
            <a 
            href=""
            onClick={handleLogout}
            >
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
