import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function SearchPopup({ onRequestClose }) {
  const searchForm = useFormik({
    initialValues: {
      query: "",
      searchType: "movies",
    },
    validationSchema: Yup.object({
      query: Yup.string().required(),
      searchType: Yup.string().required(),
    }),
    validateOnMount: true,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="g-search">
      <div className="d-flex justify-content-between align-items-center heading mb-2">
        <p className="text-dark">Search movies, tv or people</p>
        <button className="btn text-danger" onClick={() => onRequestClose()}>
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
              className="form-control form-control-sm"
              placeholder="Search"
            />
            <button
              className="btn btn-secondary btn-sm "
              type="submit"
              disabled={!searchForm.isValid}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="btn-group w-100 mb-2" role="group">
            <Field
              type="radio"
              className="btn-check"
              name="searchType"
              id="movies"
              value="movies"
            />
            <label
              className="btn btn-sm btn-outline-secondary"
              htmlFor="movies">
              Movie
            </label>
            <Field
              type="radio"
              className="btn-check"
              name="searchType"
              id="tv"
              value="tv"
            />
            <label className="btn btn-sm btn-outline-secondary" htmlFor="tv">
              TV Shows
            </label>
            <Field
              type="radio"
              className="btn-check"
              name="searchType"
              id="person"
              value="person"
            />
            <label
              className="btn btn-sm btn-outline-secondary"
              htmlFor="person">
              Person
            </label>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
}

export default SearchPopup;
