import {Row, Col, Form, Input, Button} from 'antd';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {helper} from '../../helper/common';
import {api} from '../../services/api';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const LoginPage = () => {

    const history = useHistory();
    const [errorLogin, setErrorLogin] = useState('');

    const onFinish = (values) => {
      let user = values.username;
      let pass = values.password;
      let token = api.checkUserLogin(user, pass);
      if(token) {
        // luu token lai
        setErrorLogin('');
        helper.saveToken(token);
        history.push('/');
      } else {
        setErrorLogin('acount invalid');
      }
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <>
        <Row>
            <Col span={12} offset={6}>
              <h2 style={{textAlign: 'center', color: 'red'}}>
                {errorLogin}
              </h2>
             <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
             >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
           </Col>
        </Row>
    </>
    )
}

export default LoginPage;