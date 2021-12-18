import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    document.getElementById("content").classList.add("block-scroll");
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
      html={<SearchPopup onRequestClose={closeSearch} />}>
      <div className="title">
        <div className="d-md-none">
          <button className="btn me-2" onClick={openSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>
        <h4 className="m-0 text-primary">Exxmon</h4>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={openSearch}>
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        <span>Search</span>
      </button>
    </Tooltip>
  );
}

export default AppHeaderEnhance;
