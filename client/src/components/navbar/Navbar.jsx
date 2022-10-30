import "./navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Club</span>
        </Link>
        <AiOutlineHome />
        <BsMoon />
        <AiOutlineAppstore />
        <div className="search">
          <VscSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <BiUser />
        <AiOutlineMail />
        <IoMdNotificationsOutline />
        <div className="user">
          <img src="https://www.pwshoponline.com/assets/images/avatars/avatar7_big@2x.png" alt="user avatar" />
          <span>Vlad Olishkevych</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
