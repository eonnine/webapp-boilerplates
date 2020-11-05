import React, { ReactElement } from 'react';
import { Layout } from 'antd';

import Sider from './Sider';
import Tile from './Tile';
import Content from './Content';

function Container(): ReactElement {
	return (
		<Layout>
			<Sider width="20%" />
			<Tile width="40%" />
			<Content />
		</Layout>
	);
}

export default Container;
