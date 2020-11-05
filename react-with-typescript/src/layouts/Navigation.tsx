import React, { ReactElement } from 'react';
import { Row, Col, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '@/router';
import { service } from '@/configs';

function Navigation(): ReactElement {
	const location = useLocation();

	return (
		<Row wrap={false} justify="center" align="middle">
			<Col>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={[location.pathname]} style={{ lineHeight: '64px', textAlign: 'center' }}>
					{routes
						.filter(route => service.getValue(route, 'meta.navigation.show'))
						.map(route => {
							return (
								<Menu.Item key={route.path}>
									<NavLink
										to={route.path}
										exact={route.exact}
										activeClassName="active"
										activeStyle={{
											fontWeight: 'bold',
											color: '#1890ff',
										}}
									>
										{route.name}
									</NavLink>
								</Menu.Item>
							);
						})}
				</Menu>
			</Col>
		</Row>
	);
}

export default Navigation;
