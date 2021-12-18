import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import * as Yup from "yup";
import "./Search.scss";

function Search() {
  const searchForm = useFormik({
    initialValues: {
      query: "",
    },
    validationSchema: Yup.object({
      query: Yup.string().required(),
    }),
    validateOnMount: true,
    onSubmit: (values) => console.log(values),
  });

  const [showSearch, setShowSearch] = useState(false);
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
    <div className="me-2 pointer">
      <Tooltip
        open={showSearch}
        // onRequestClose={closeSearch}
        className="btn"
        position="bottom-end"
        trigger="click"
        interactive
        tag="button"
        distance={25}
        theme="g-search light"
        arrow={false}
        html={
          <div className="g-search">
            <div className="d-flex justify-content-between align-items-center heading mb-2">
              <p className="text-dark">Search movies, tv or people</p>
              <button className="btn text-danger" onClick={closeSearch}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <FormikProvider value={searchForm}>
              <form className="w-100" onSubmit={searchForm.handleSubmit}>
                <div className="input-group mb-3">
                  <Field
                    type="text"
                    name="query"
                    id="gSearch"
                    // ref={gSearchRef}
                    className="form-control form-control-sm"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-primary btn-sm "
                    type="submit"
                    disabled={!searchForm.isValid}>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </FormikProvider>
          </div>
        }>
        <FontAwesomeIcon
          icon={faSearch}
          className="text-primary"
          onClick={openSearch}
        />
      </Tooltip>
    </div>
  );
}

export default Search;
