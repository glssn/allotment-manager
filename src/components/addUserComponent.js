import React, { useState } from "react";
// import { showModal, isModalVisible, handleOk, handleCancel } from "../constants/modal";

//moment is used for create a date format for date comparisons

import {
  Button,
  Modal
} from "antd";
// import { PlusOutlined } from '@ant-design/icons';

// import { Row } from "react-flexbox-grid";

//Basic error detection and data validation occurs in this file.
class AddUserComponent extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
const { visible, loading } = this.state;
return (
  <>
    <Button type="primary" onClick={this.showModal}>
      Add user
    </Button>
    <Modal
      visible={visible}
      title="Add new user"
      onOk={this.handleOk}
      onCancel={this.handleCancel}
      // footer={[
      //   <Button key="back" onClick={this.handleCancel}>
      //     Return
      //   </Button>,
      //   <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
      //     Submit
      //   </Button>,
      //   <Button
      //     key="link"
      //     href="https://google.com"
      //     type="primary"
      //     loading={loading}
      //     onClick={this.handleOk}
      //   >
      //     Search on Google
      //   </Button>,
      // ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
);
}
}
export default AddUserComponent;
