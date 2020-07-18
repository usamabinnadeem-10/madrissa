import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Card
        bg="light"
        body
        text="dark"
        fluid="sm"
        style={{ "margin-top": "7rem" }}
      >
        <h2 className="mb-3 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <Row className="justify-content-md-center mb-3">
            <label htmlFor="email" style={{ width: "7rem" }}>
              <strong>Email Address</strong>
            </label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </Row>

          <Row className="justify-content-md-center mb-3">
            <label htmlFor="password" style={{ width: "7rem" }}>
              <strong>Password</strong>
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Row>

          <Row className="justify-content-md-center">
            <Button type="submit" block size="lg" variant="primary">
              Submit
            </Button>
          </Row>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
