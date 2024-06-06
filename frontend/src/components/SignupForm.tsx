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
            className="login-form w-full"
            initialValues={{ remember: true}}
            layout='vertical'
            onFinish={onFinish}
        >

            <Form.Item>
                <h1 className='text-[#F3F3F3] text-2xl font-semibold font-opensans'>Sign Up</h1>
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


            <Form.Item
                name="cnfpassword"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >

                <p className='text-[#F3F3F3] text-sm font-opensans font-normal'>Confirm Password</p>
                <Input
                    className='mt-[9px] h-[47px]'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button mt-2 w-full bg-[#2E9844] rounded-[4px] h-[47px]">
                    Continue
                </Button>
            </Form.Item> 
        </Form>
    );
};

export default LoginForm;