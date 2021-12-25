import { Field, FormikProvider, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { APP_TITLE } from "../../../constants/appConstants";
import "./Login.scss";

function Login() {
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    validateOnMount: true,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="login-page row m-0 h-100">
      {loginForm.valid}
      <div className="col-md-6 col-lg-6 col-sm-12 pt-5">
        <div className="login-container p-3 border border-primary">
          <h3>Login to {APP_TITLE}</h3>
          <FormikProvider value={loginForm}>
            <form className="mt-4" onSubmit={loginForm.handleSubmit}>
              <Field
                name="username"
                type="text"
                className="form-control form-control-sm mb-3"
                placeholder="Username"
                autoFocus
              />
              <Field
                name="password"
                type="password"
                className="form-control form-control-sm mb-3"
                placeholder="Password"
              />
              <div className="d-flex justify-content-between align-items-center">
                <span className="small">
                  New to {APP_TITLE}?{" "}
                  <Link
                    to="/sign-up"
                    className="text-warning text-decoration-none">
                    Sign Up!
                  </Link>
                </span>
                <button
                  type="submit"
                  disabled={!loginForm.isValid}
                  className="btn btn-sm btn-primary text-secondary fw-bold text-uppercase">
                  Login
                </button>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}

export default Login;
