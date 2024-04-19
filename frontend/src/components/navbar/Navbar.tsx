import { TfiAlignLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import bliss from "../../assets/bliss2.png";

import "./navbar.scss";
import { useState } from "react";
import Menu from "../Menu/Menu";
const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(true);
  const handleDropMenu = () => {
    setDropMenu((prevDropMenu) => !prevDropMenu);
  };
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src={bliss} alt="" />
        </Link>

        <ul>
          {dropMenu ? (
            <li onClick={handleDropMenu} className="menu-icon">
              Menu <TfiAlignLeft />
            </li>
          ) : (
            <li className="menu-icon">
              <AiOutlineClose onClick={handleDropMenu} />
            </li>
          )}
          <Menu handleDropMenu={handleDropMenu} dropMenu={dropMenu} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;