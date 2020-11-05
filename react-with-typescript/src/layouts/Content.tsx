import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';

const { Content } = Layout;

function WithContentLayout(WrappedComponent: any): any {
	return ({ ...props }: BasicProps): ReactElement => {
		return (
			<Content {...props} className="content-wrap">
				<WrappedComponent {...props} />
			</Content>
		);
	};
}

export default WithContentLayout;
