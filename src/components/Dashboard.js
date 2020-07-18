import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import Complaint from "./Complaint";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const ul = {
  "background-color": "#007bff",
  height: "5rem",
  color: "#f8f9fa",
  "text-align": "center",
  "border-bottom": "1px solid white",
  padding: "1.5rem",
  "font-weight": "700",
};

const Dashboard = () => {
  return (
    <Container className="ml-0 pl-0">
      <Row>
        <Col className="ml-0 pl-0" md={4} lg={4} xl={4}>
          <ul>
            <li style={ul}>
              <NavLink to="/home/add-student" style={{ color: "white" }}>
                Add Student
              </NavLink>
            </li>
            <li style={ul}>
              <NavLink to="/home/update-student" style={{ color: "white" }}>
                Update Student
              </NavLink>
            </li>
            <li style={ul}>Add Student Status</li>
            <li style={ul}>
              <NavLink to="/home/student-complaint" style={{ color: "white" }}>
                Launch Student Complaint
              </NavLink>
            </li>
            <li style={ul}>All Students List</li>
          </ul>
        </Col>
        <Col>
          <Switch>
            <Route
              exact
              path="/home/add-student"
              component={AddStudent}
            ></Route>
            <Route
              exact
              path="/home/update-student"
              component={UpdateStudent}
            ></Route>
            <Route
              exact
              path="/home/student-complaint"
              component={Complaint}
            ></Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
