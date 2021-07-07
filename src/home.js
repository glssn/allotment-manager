import React from "react";
import { Button } from "antd";
import { Row, Col } from "react-flexbox-grid";
import AddUserComponent from "./components/addUserComponent";
// import Dashchart from "./components/dashchart";

// const { Option } = Select;

//This file contains the data maange for the dashchart and the display of ui elements on the dashboard.
class Allotments extends React.Component {
    render () {
      return(
        <section style={{ textAlign: "center" }}>
          <Row around="xs">
            <Col xs={12} sm={3} lg={3}>
              <h2 style={{ marginLeft: 20, marginTop: 20 }}>Home</h2>
            </Col>
          </Row>
          Welcome to the Probus allotments management system!
          <Row>
           <Col xs>
           <Button>New inspection</Button>
           </Col>
           <Col xs>
           <Button>New user</Button>
           </Col>
           <Col xs>
           <AddUserComponent />
           </Col>
          </Row>
        </section>
    );
  }
  }

export default Allotments;
