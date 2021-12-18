import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/actions/sidebar.action";
import "./AppHeader.scss";

function AppHeader() {
  const dispatch = useDispatch();
  const { open: sidebarOpen } = useSelector((state) => state);
  return (
    <div className="header" id="header">
      <div className="title">
        <div className="d-md-none">
          <button
            className="btn ps-0"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>
        <h4 className="m-0 text-primary">Exxmon</h4>
      </div>
    </div>
  );
}

export default AppHeader;
