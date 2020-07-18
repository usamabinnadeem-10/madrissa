import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AddStudent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      complaint: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      complaint: Yup.string().required("Required"),
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
        style={{ "margin-top": "3rem" }}
      >
        <h2 className="mb-3 text-center">Launch Complaint</h2>
        <form onSubmit={formik.handleSubmit}>
          <Row className="justify-content-md-center mb-3">
            <label htmlFor="name" style={{ width: "7rem" }}>
              <strong>Name</strong>
            </label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </Row>

          <Row className="justify-content-md-center mb-3">
            <label htmlFor="complaint" style={{ width: "7rem" }}>
              <strong>Complaint</strong>
            </label>
            <textarea
              id="complaint"
              type="text"
              {...formik.getFieldProps("complaint")}
            />
            {formik.touched.complaint && formik.errors.complaint ? (
              <div>{formik.errors.complaint}</div>
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

export default AddStudent;
