import React, { ReactElement } from 'react';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

function HeaderComponent(): ReactElement {
	return (
		<Header>
			<Row wrap={false} justify="space-between" align="middle" className="header">
				<Col flex="auto">
					<h3>Header</h3>
				</Col>
			</Row>
		</Header>
	);
}

export default HeaderComponent;
