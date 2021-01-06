const form = ({ onFinish }) => (
  <Form name="order" onFinish={onFinish} autoComplete="off">
    <Form.List name="items">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <Space
              key={field.key}
              style={{ display: "flex", marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item
                {...field}
                name={[field.name, "ware_key"]}
                fieldKey={[field.fieldKey, "ware_key"]}
                rules={[{ required: true, message: "Missing first name" }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                {...field}
                name={[field.name, "last"]}
                fieldKey={[field.fieldKey, "last"]}
                rules={[{ required: true, message: "Missing last name" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                {...field}
                name={[field.name, "last"]}
                fieldKey={[field.fieldKey, "last"]}
                rules={[{ required: true, message: "Missing last name" }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                {...field}
                name={[field.name, "last"]}
                fieldKey={[field.fieldKey, "last"]}
                rules={[{ required: true, message: "Missing last name" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add item
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </Form>
);

const btns = (
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
);

module.exports = (ctx) => form;
