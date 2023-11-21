import React from 'react'
import { Button, Form, Input } from 'antd';
import "../styles/RegisterStyle.css"

const onFinish = (values) => {
  console.log('Success:', values);
};


const Register = () => {
  return (
    <>
    <div className='form-container'>
      <Form
        layout='vertical'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input type='text' required></Input>
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type='email' required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input type='password' required></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
    </>
  )
}

export default Register;