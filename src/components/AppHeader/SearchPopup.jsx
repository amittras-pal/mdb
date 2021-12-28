import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FormikProvider, useFormik } from "formik";
import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { categories } from "../../constants/globalSearch";

function SearchPopup({ onRequestClose }) {
  const navigate = useNavigate();

  const searchForm = useFormik({
    initialValues: {
      query: "",
      searchType: categories[0].value,
    },
    validationSchema: Yup.object({
      query: Yup.string().required(),
      searchType: Yup.string().required(),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      onRequestClose();
      navigate(
        `/${values.searchType}?${createSearchParams({ query: values.query })}`
      );
    },
  });

  return (
    <>
      <div className="modal-header d-flex justify-content-between align-items-center heading mb-2">
        <p className="mb-0 small">Search movies, tv or people</p>
        <button className="btn text-primary" onClick={() => onRequestClose()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal-body">
        <FormikProvider value={searchForm}>
          <form className="w-100" onSubmit={searchForm.handleSubmit}>
            <div className="input-group mb-3">
              <Field
                type="text"
                name="query"
                id="gSearch"
                className="form-control form-control-sm border-primary"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-primary btn-sm "
                type="submit"
                disabled={!searchForm.isValid}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="btn-group w-100 mb-2" role="group">
              {categories.map((cat) => (
                <React.Fragment key={cat.value}>
                  <Field
                    type="radio"
                    className="btn-check"
                    name="searchType"
                    id={cat.value}
                    value={cat.value}
                  />
                  <label
                    className="btn btn-sm btn-outline-primary fw-bold"
                    htmlFor={cat.value}>
                    {cat.label}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </form>
        </FormikProvider>
      </div>
    </>
  );
}

export default SearchPopup;
