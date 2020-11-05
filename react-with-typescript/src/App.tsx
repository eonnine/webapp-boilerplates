import React, { Suspense, ReactElement } from 'react';
import { Switch } from 'react-router-dom';
import { routes, SubRoutes } from '@/router';

import { Spinner } from '@/components/commons';

function App(): ReactElement {
	return (
		<Suspense fallback={<Spinner tip="로딩중입니다." size="large" />}>
			<Switch>
				{routes.map((route: any) => (
					<SubRoutes key={route.path} {...route} />
				))}
			</Switch>
		</Suspense>
	);
}

export default App;
