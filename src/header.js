import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, BuildOutlined, UserOutlined, OrderedListOutlined } from '@ant-design/icons';
// import Addtrade from "./components/addtrade";
// import Notifications from "./components/notifications";

//This file controls what is displayed on the header, including links to portflio page, reports and dashboard
const Header = () => (
  <>
    <Menu theme="light" defaultSelectedKeys={["1"]} mode="horizontal">
      <Menu.Item key="1">
        <HomeOutlined />
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2">
        <BuildOutlined />
        <span>Allotments</span>
        <Link to="/allotments" />
      </Menu.Item>
      <Menu.Item key="3">
        <UserOutlined />
        <span>Users</span>
        <Link to="/users" />
      </Menu.Item>
      <Menu.Item key="4">
        <OrderedListOutlined />
        <span>Waiting list</span>
        <Link to="/waiting" />
      </Menu.Item>
    </Menu>
  </>
);

export default Header;
