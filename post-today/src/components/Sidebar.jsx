const Sidebar = ({ selectTab, setSelectTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Post-Today</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectTab === "Home" && "active"
            } `}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectTab("Create");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectTab === "Create" && "active"
            } `}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
