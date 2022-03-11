import React, { useMemo, useState } from "react";
import { Exit, Home, MenuIcon, QLogo, Settings, User } from "assets/icons";
import IconLabel from "components/IconLabel";
import "./Navbar.css";
import useDimension from "hooks/useDimension";
import Sidebar from "components/Sidebar";
const Navbar = () => {
  const { width } = useDimension();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle=()=> setIsSidebarOpen(!isSidebarOpen)
  const isMobileMode = useMemo(() => width < 768, [width]);
  return (
    <>
      <div className="navbar">
        <div className="mainHolder">
          <div className="leftPart">
            <div className="icon">
              <QLogo />
            </div>
            <span className={`${isMobileMode ? "" : "border-bottom"} caption`}>
              Hallo, LIQID!{" "}
            </span>
            {!isMobileMode && <IconLabel icon={<Exit />} label="Logout" />}
          </div>
          {isMobileMode ? (
            <div onClick={toggle}>
              <IconLabel icon={<MenuIcon />} />
            </div>
          ) : (
            <div className="rightPart">
              <IconLabel icon={<Home />} label="Home" active />
              <IconLabel icon={<User />} label="Profile" />
              <IconLabel icon={<Settings />} label="Settings" />
            </div>
          )}
        </div>
      </div>
      {isSidebarOpen && <Sidebar  toggle={toggle}/>}
    </>
  );
};

export default Navbar;
