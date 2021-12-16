import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menu } from "../../../constants/menuItems";
import React, { useState } from "react";
import "./SidebarNav.scss";

function SidebarNav() {
  const [activeLink, setactiveLink] = useState(menu[0].menuItems[0].id);
  const toggleActiveLink = (link) => setactiveLink(link);
  return (
    <nav className="sidebar bg-light">
      {menu.map((section) => (
        <div key={section.menuHeading} className="sidebar__section">
          <div className="sidebar__heading">{section.menuHeading}</div>
          <ul className="sidebar__nav">
            {section.menuItems.map((item) => (
              <button
                key={item.id}
                className={`sidebar__nav__button ${
                  activeLink === item.id ? "active" : ""
                }`}
                onClick={() => toggleActiveLink(item.id)}>
                <span className="icon-container">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="label">{item.label}</span>
              </button>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default SidebarNav;
