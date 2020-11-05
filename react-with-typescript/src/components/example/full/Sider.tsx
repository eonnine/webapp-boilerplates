import React, { ReactElement } from 'react';
import { Card, Button } from 'antd';

import { WithSiderLayout } from '@/layouts';

// Card형일 경우 bodyStyle (height를 지정)
function Sider(): ReactElement {
	return (
		<Card title="Sider" extra={<Button>More</Button>} bodyStyle={{ height: 'calc(70vh - 60px)' }}>
			Sider
		</Card>
	);
}

export default WithSiderLayout(Sider);
