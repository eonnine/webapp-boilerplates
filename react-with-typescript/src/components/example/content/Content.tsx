import React, { ReactElement } from 'react';
import { Card } from 'antd';

import { WithContentLayout } from '@/layouts';

// Card형일 경우 bodyStyle (height를 지정)
function Content(): ReactElement {
	return (
		<Card title="Content title" bodyStyle={{ height: 'calc(70vh - 60px)' }}>
			Content Wrapper
		</Card>
	);
}

export default WithContentLayout(Content);
