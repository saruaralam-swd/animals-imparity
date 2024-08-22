const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 text-black">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Animals Imparity</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2">
              <button className="btn btn-primary text-lg outline-none bg-black rounded-full hover:bg-white hover:text-black">
                Add Animals
              </button>
            </li>
            <li>
              <button className="btn btn-primary text-lg outline-none bg-black rounded-full hover:bg-white hover:text-black">
                Add Category
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
