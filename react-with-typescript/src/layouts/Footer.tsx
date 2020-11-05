import React, { ReactElement } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function FooterComponent(): ReactElement {
	return (
		<Footer className="footer">
			<p>Footer</p>
		</Footer>
	);
}

export default FooterComponent;
