import React, { ReactElement } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Layout } from 'antd';
import { useHistory } from 'react-router-dom';

import { FooterComponent } from '@/layouts';

const { Content } = Layout;

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function Login(): ReactElement {
	// Form Instance
	const [form] = Form.useForm();
	const history = useHistory();

	const onFinish = (values: any): void => {
		console.log('Success:', values, form);
		return history.push('/');
	};

	const onFinishFailed = (errorInfo: any): any => {
		console.log('Failed:', errorInfo);
		return null;
	};

	return (
		<Layout>
			<Content>
				<Row justify="center" align="middle" style={{ height: `calc(100vh - 70px)` }}>
					<Col span={8}>
						<Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
							<Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
								<Input />
							</Form.Item>

							<Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
								<Input.Password />
							</Form.Item>

							<Form.Item {...tailLayout} name="remember" valuePropName="checked">
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Form.Item {...tailLayout}>
								<Button type="primary" htmlType="submit" block>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Content>
			<FooterComponent />
		</Layout>
	);
}

export default Login;
