import React from 'react'
import { Button, Divider, Form, Input, Typography } from 'antd';
import "../styles/RegisterStyle.css"
import {Link} from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};


const Register = () => {
  return (
    <>
    <div className='reg-form-container'>
      <Form
        className='register-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <div className='reg-form-text'>
        <Typography style={{color: '#FDFEFE', textAlign:'center'}}>Ihre Registrierung bei</Typography>
        <Typography.Title style={{color: '#FDFEFE', textAlign:'center'}}>Meine ARZT</Typography.Title>
        <Divider style={{borderColor: "white", color: "white"}}>Persönliche Information</Divider>
        </div>
        <Form.Item label="Name des Patienten" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input type='text' required></Input>
        </Form.Item>
        <Form.Item label="Adresse" name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
          <Input type='text' required></Input>
        </Form.Item>
        <Form.Item label="Geburtsdatum" name="dob" rules={[{ required: true, message: 'Please input your date of birth!' }]}>
          <Input type='date' required></Input>
        </Form.Item>
        <Form.Item label="E-Mail-Adresse" name="email" rules={[{ required: true, message: 'Please a valid email!' }]}>
          <Input type='email' required></Input>
        </Form.Item>
        <Form.Item label="Passwort" name="password" rules={[{ required: true, message: 'Please input correct password!' }]}>
          <Input.Password type='password' required></Input.Password>
        </Form.Item>
        <Button type="primary" htmlType="submit" block style={{backgroundColor:"#512E5F"}}>
          Submit
        </Button>
        <Typography style={{padding: "10px" , textAlign: "center", margin: "5px"}}>Hast du dich schon registriert? <Link to="/login" className='form-text-below'>Hier anmelden</Link></Typography>
      </Form>

    </div>
    </>
  )
}

export default Register;