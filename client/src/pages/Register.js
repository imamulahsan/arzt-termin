import React from 'react'
import { Button, Divider, Form, Input, Typography, message } from 'antd';
import axios from "axios";
import "../styles/RegisterStyle.css"
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try{
      dispatch(showLoading());
      const res = await axios.post('/api/v1/user/register' , values)
      dispatch(hideLoading());
      if(res.data.success){
        message.success('User Registered Successfully')
        navigate('/login')
      }
      else{
        message.error(res.data.message)
      }
    }
    catch(error){
      dispatch(hideLoading());
      console.log(error)
      message.error('Something went wrong')
    }
  };
  return (
    <>
    <div className='reg-form-container'>
      <Form
        className='register-form'
        initialValues={{ remember: true }}
        layout='vertical'
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