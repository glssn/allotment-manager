import React from "react";
import { Table, Tag, Space } from "antd";
import { Row, Col } from "react-flexbox-grid";

// import Moment from "moment"
// import ReportPDF from "./components/reportpdf";
// import { Link } from "react-router-dom";

// const { RangePicker } = DatePicker;
//This file is responsible for calling all child components and handling UI elements on reports page (is the parent component)

const columns = [
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
},
{
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
},
{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},
{
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </>
  ),
},
{
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <Space size="middle">
      <a>Invite {record.name}</a>
      <a>Delete</a>
    </Space>
  ),
},
];

const data = [
{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
},
{
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
},
{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},
];

class Users extends React.Component {
      render () {
        return(
          <section style={{ textAlign: "center" }}>
            <Row around="xs">
              <Col xs={12} sm={3} lg={3}>
                <h2 style={{ marginLeft: 20, marginTop: 20 }}>Users</h2>
              </Col>
            </Row>
            Below is the current list of users in the system
            <Row>
              <Col xs>
                <Table columns = {columns} dataSource={data} />
              </Col>
            </Row>
          </section>
      );
    }
}

export default Users;
