import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/actions/sidebar.action";
import "./AppHeader.scss";
import Search from "./GSearch/Search";

function AppHeader() {
  const dispatch = useDispatch();
  const { open: sidebarOpen } = useSelector((state) => state);
  const openSidebar = () => {
    dispatch(toggleSidebar());
    document.getElementById("content").classList.add("block-scroll");
  };
  return (
    <div className="header" id="header">
      <div className="title">
        <div className="d-md-none">
          <button className="btn me-2" onClick={openSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>
        <h4 className="m-0 text-primary">Exxmon</h4>
      </div>
      <Search />
    </div>
  );
}

export default AppHeader;
