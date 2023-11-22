import React from 'react'
import { Button, Divider, Form, Input, Typography } from 'antd';
import "../styles/RegisterStyle.css"

const onFinish = (values) => {
  console.log('Success:', values);
};


const Register = () => {
  return (
    <>
    <div className='form-container'>
      <Form
        className='register-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <div className='form-text'>
        <Typography style={{color: '#FDFEFE', textAlign:'center'}}>Ihre Registrierung bei</Typography>
        <Typography.Title style={{color: '#FDFEFE', textAlign:'center'}}>Meine ARZT</Typography.Title>
        <Divider style={{borderColor: "white", color: "white"}}>Persönliche Information</Divider>
        </div>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input type='text' required></Input>
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please a valid email!' }]}>
          <Input type='email' required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input.Password type='password' required></Input.Password>
        </Form.Item>
        <Typography style={{padding: "10px" , textAlign: "center", margin: "5px"}}>Already Registered? Login Instead</Typography>
        <Button type="primary" htmlType="submit" block style={{backgroundColor:"#512E5F"}}>
          Submit
        </Button>
      </Form>

    </div>
    </>
  )
}

export default Register;