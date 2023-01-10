export default function Navbar() {
  return (
    <header
      className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
      id="navbar"
    >
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
        <img
          src={require("../assets/logo-uniqlo.png")}
          width={60}
          className="d-inline-block me-2"
          height={50}
          alt="G-3"
        />
        Admin Panel
      </a>
    </header>
  );
}
