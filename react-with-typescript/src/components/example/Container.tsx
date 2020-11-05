import React, { Suspense, ReactElement } from 'react';
import { Layout, Row, Col, Button } from 'antd';

import { Switch, useLocation, NavLink } from 'react-router-dom';
import { WithFullLayout } from '@/layouts';
import { SubRoutes } from '@/router';

import { service } from '@/configs';
import { Spinner } from '@/components/commons';

function Container({ routes = [] }: any): ReactElement {
	const location = useLocation();

	return (
		<Layout className="example">
			<Row wrap={false} justify="center" align="middle" style={{ padding: '10px' }}>
				<Col flex="100%" style={{ textAlign: 'center' }}>
					{routes
						.filter((route: any) => service.getValue(route, 'meta.navigation.show'))
						.map((route: any) => {
							return (
								<NavLink key={route.path} to={route.path} exact={route.exact} activeClassName="active" style={{ margin: '0 5px' }}>
									<Button type={location.pathname === route.path ? 'primary' : 'ghost'}>{route.name}</Button>
								</NavLink>
							);
						})}
				</Col>
			</Row>

			<Suspense fallback={<Spinner />}>
				<Switch>
					{routes.map((route: any) => {
						return <SubRoutes key={route.path} {...route} />;
					})}
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default WithFullLayout(Container);
