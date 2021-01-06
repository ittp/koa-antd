import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Form, Input, Button, Space } from "antd";
// import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormBuilder from "antd-form-builder";

const meta = [
  {
    key: 1,
    name: 1,
    initialValue: 1,
    type: "button"
  }
];

const View = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form name="form" onFinish={onFinish}>
      <FormBuilder form="order" meta={{ name: "1", key: 0 }} />
    </Form>
  );
};

// export default ({ data }) => <View {...data} />;
ReactDOM.render(<View />, document.getElementById("container"));
