import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FormikProvider, useFormik } from "formik";
import { searchCategories } from "../../constants/globalSearch";
import React from "react";
import * as Yup from "yup";

function SearchPopup({ onRequestClose }) {
  const searchForm = useFormik({
    initialValues: {
      query: "",
      searchType: searchCategories.MOVIE,
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
              id={searchCategories.MOVIE}
              value={searchCategories.MOVIE}
            />
            <label
              className="btn btn-sm btn-outline-secondary"
              htmlFor={searchCategories.MOVIE}>
              Movie
            </label>
            <Field
              type="radio"
              className="btn-check"
              name="searchType"
              id={searchCategories.TV}
              value={searchCategories.TV}
            />
            <label
              className="btn btn-sm btn-outline-secondary"
              htmlFor={searchCategories.TV}>
              TV Shows
            </label>
            <Field
              type="radio"
              className="btn-check"
              name="searchType"
              id={searchCategories.PERSON}
              value={searchCategories.PERSON}
            />
            <label
              className="btn btn-sm btn-outline-secondary"
              htmlFor={searchCategories.PERSON}>
              Person
            </label>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
}

export default SearchPopup;
