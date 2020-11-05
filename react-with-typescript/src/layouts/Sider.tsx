// import React from 'react';
// import { Layout } from 'antd';
import React, { ReactElement } from 'react';
import { Layout } from 'antd';

import { SiderProps } from 'antd/lib/layout';

const { Sider } = Layout;

interface ISiderProps extends SiderProps {
	width?: string | number;
}

function WithSiderLayout(WrappedComponent) {
	return ({ ...props }: ISiderProps): ReactElement => {
		return (
			<Sider className="sider-wrap" theme={props.theme || 'light'} width={props.width || '300'} {...props}>
				<WrappedComponent {...props} />
			</Sider>
		);
	};
}

export default WithSiderLayout;
