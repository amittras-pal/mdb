import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { menu } from "../../constants/menuItems";
import { toggleSidebar } from "../../store/actions/sidebar.action";
import "./Sidebar.scss";

function Sidebar() {
  const dispatch = useDispatch();
  const { open: sidebarOpen } = useSelector((state) => state);
  const menuRef = useRef();

  const closeSidebar = useCallback(() => {
    dispatch(toggleSidebar());
    document.getElementById("content").classList.remove("block-scroll");
  }, [dispatch]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!menuRef.current?.contains(event.target)) closeSidebar();
    };
    if (sidebarOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [sidebarOpen, dispatch, closeSidebar]);

  return (
    <nav className={sidebarOpen ? "sidebar active" : "sidebar"} ref={menuRef}>
      <div className="d-flex w-100 justify-content-end toggle-container align-items-end d-md-none">
        <button className="close-sidebar d-md-none" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-light" />
        </button>
      </div>
      <div className="sidebar-menu">
        {menu.map((section) => (
          <div key={section.menuHeading} className="sidebar__section">
            <div className="sidebar__heading">{section.menuHeading}</div>
            <ul className="sidebar__nav">
              {section.menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="sidebar__nav__button"
                  activeclassname="active"
                  onClick={closeSidebar}>
                  <span className="icon-container">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className="label">{item.label}</span>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
