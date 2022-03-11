import React, { FunctionComponent } from "react";
import {
  CloseIcon,
  Exit,
  Home,
  LiqidIcon,
  RedLogo,
  Settings,
  User,
} from "assets/icons";
import "./Sidebar.css";
import IconLabel from "components/IconLabel";

interface Props {
  toggle: () => void;
}
const Sidebar: FunctionComponent<Props> = ({ toggle }) => {
  return (
    <div className="sidebarContainer" onClick={toggle}>
      <div className="logoCloseIcon">
        <div className="logo-caption-holder">
          <div className="sidebarLogo">
            <RedLogo />
          </div>
          <span className="caption "> Hallo, LIQID! </span>
        </div>
        <div className="close-icon">
          <CloseIcon />
        </div>
      </div>
      <div className="tabs">
        <IconLabel icon={<Exit />} label="Logout" />
        <IconLabel icon={<Home />} label="Home" />
        <IconLabel icon={<User />} label="Profile" />
        <IconLabel icon={<Settings />} label="Settings" />
      </div>
      <div className="liqid-text">
        <LiqidIcon />
      </div>
    </div>
  );
};

export default Sidebar;
