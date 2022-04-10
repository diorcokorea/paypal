import React, { useState } from "react";
import { Radio, Button, Space } from "antd";

const Products = (props) => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    props.rtnValue(e.target.value);
  };
  return (
    <div>
      <Radio.Group onChange={onChange} value={value} size="large">
        <Space direction="vertical">
          <Radio value={0.1}> 100</Radio>
          <Radio value={200}> 200</Radio>
          <Radio value={1000}>1000</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default Products;
