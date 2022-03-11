import React, { FunctionComponent } from "react";
import "./IconLabel.css";
interface Props {
  icon?: JSX.Element;
  label?: string;
  active?: boolean;
}
const IconLabel: FunctionComponent<Props> = ({ icon, label, active }) => {
  const isActive = active ? "active" : "";
  return (
    <div className={`${isActive} iconLabelHolder`}>
      {icon && icon}
      <span className="label">{label && label}</span>
    </div>
  );
};

export default IconLabel;
