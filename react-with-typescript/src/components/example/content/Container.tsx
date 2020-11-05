import React, { ReactElement } from 'react';
import { Layout } from 'antd';

import Content from './Content';

function Container(): ReactElement {
	return (
		<Layout>
			<Content />
		</Layout>
	);
}

export default Container;
