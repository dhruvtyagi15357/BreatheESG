import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const LoginForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true}}
            layout='vertical'
            onFinish={onFinish}
        >

            <Form.Item>
                <h1 className='text-[#F3F3F3] text-2xl font-semibold font-opensans'>Login</h1>
                <p className='text-[#F3F3F3] text-sm font-opensans font-normal mt-[8px]'>Enter your registered email ID to continue</p>
            </Form.Item>



            <Form.Item
                name="Email"                
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <p className='text-[#F3F3F3] text-sm font-opensans font-normal'>Email</p>
                <Input className='mt-[9px] h-[47px]' prefix={<UserOutlined className="site-form-item-icon " />} placeholder="Email" />
            </Form.Item>


            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >

                <p className='text-[#F3F3F3] text-sm font-opensans font-normal'>Password</p>
                <Input
                    className='mt-[9px] h-[47px]'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <div className="flex gap-2 text-[#F3F3F3] text-sm font-opensans font-normal">
                <p >Having trouble logging in? </p>
                <a className="login-form-forgot text-[#4FA556]" href="">
                    Contact us
                </a>
            </div>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button mt-2 w-full bg-[#2E9844] rounded-[4px] h-[47px] ">
                    Log in
                </Button>
            </Form.Item> 
        </Form>
    );
};

export default LoginForm;