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
      age: "",
      parentName: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      age: Yup.number().required("Required"),
      parentName: Yup.string().required("Required"),
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
        <h2 className="mb-3 text-center">Add Student Details</h2>
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
            <label htmlFor="age" style={{ width: "7rem" }}>
              <strong>age</strong>
            </label>
            <input id="age" type="age" {...formik.getFieldProps("age")} />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
          </Row>

          <Row className="justify-content-md-center mb-3">
            <label htmlFor="parentName" style={{ width: "7rem" }}>
              <strong>parentName</strong>
            </label>
            <input
              id="parentName"
              type="parentName"
              {...formik.getFieldProps("parentName")}
            />
            {formik.touched.parentName && formik.errors.parentName ? (
              <div>{formik.errors.parentName}</div>
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
