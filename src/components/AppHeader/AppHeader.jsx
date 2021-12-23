import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { toggleSidebar } from "../../store/actions/sidebar.action";
import "./AppHeader.scss";
import SearchPopup from "./SearchPopup";

function AppHeaderEnhance() {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const { open: sidebarOpen } = useSelector((state) => state);

  const openSidebar = () => {
    dispatch(toggleSidebar());
  };

  const openSearch = () => {
    setShowSearch(true);
    document.getElementById("appBody").classList.add("blocked-view");
    setTimeout(() => {
      document.getElementById("gSearch").focus();
    }, 375);
  };
  const closeSearch = () => {
    setShowSearch(false);
    document.getElementById("appBody").classList.remove("blocked-view");
  };

  return (
    <Tooltip
      className="app-header"
      position="bottom-center"
      arrow={false}
      open={showSearch}
      theme="g-search light"
      interactive
      html={<SearchPopup onRequestClose={closeSearch} />}
    >
      <div className="title">
        <div className="d-md-none">
          <button className="btn me-2 text-secondary" onClick={openSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>
        <Link to="/" className="h4 m-0 fst-italic text-decoration-none">
          <span className="text-secondary">Intelli</span>
          <span className="text-primary">Shows</span>
          <span className="text-warning">.</span>
        </Link>
      </div>
      <button className="btn btn-primary btn-sm" onClick={openSearch}>
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        <span>Search</span>
      </button>
    </Tooltip>
  );
}

export default AppHeaderEnhance;
