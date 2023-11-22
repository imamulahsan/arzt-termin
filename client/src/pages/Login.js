import React from 'react';
import { Row, Col, Form, Input, Button, Image, Typography, Divider } from 'antd';
import yourImage from '../images/login-form-bg.jpg';
import "../styles/LoginStyle.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-container'>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <div className='image-container'>
          <Image src={yourImage} alt="Description of the image" style={{boxShadow: '0px 8px 32px 0 rgba(4, 21, 148, 0.33)'}}/>
          </div>
        </Col>

        <Col xs={24} sm={12}>
        <div className='login-form-container'>
        <Form
          initialValues={{ remember: true }}
          autoComplete="off"
          className='login-form'>
        <div className='login-form-text'>
        <Typography style={{color: '#FDFEFE', textAlign:'center'}}>Melden Sie sich als Patient an</Typography>
        <Typography.Title style={{color: '#FDFEFE', textAlign:'center'}}>Meine ARZT</Typography.Title>
        <Divider style={{borderColor: "white", color: "white"}}>Persönliche Information</Divider>
        </div>
        <Form.Item label="E-Mail-Adresse" name="email" rules={[{ required: true, message: 'Please a valid email!' }]}>
          <Input type='email' required></Input>
        </Form.Item>
        <Form.Item label="Passwort" name="password" rules={[{ required: true, message: 'Please input correct password!' }]}>
          <Input.Password type='password' required></Input.Password>
        </Form.Item>
        <Button type="primary" htmlType="submit" block style={{backgroundColor:"#512E5F"}}>
          Submit
        </Button>
        <Typography style={{padding: "10px" , textAlign: "center", margin: "5px"}}>Neuer Patient? <Link to="/register" className='form-text-below'>Hier registrieren</Link></Typography>
      </Form>

    </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login;