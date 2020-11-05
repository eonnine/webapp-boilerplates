import React, { ReactElement, ReactNode } from 'react';
import { Route, RouteProps } from 'react-router-dom';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// refs = https://reacttraining.com/react-router/web/example/route-config

interface SubRouteProps extends RouteProps {
	key: string;
	path: string;
	component: React.ComponentType<RouteProps | any>;
	routes: any[];
}

function SubRoutes(route: SubRouteProps): ReactElement {
	return (
		<Route
			path={route.path}
			render={(props): ReactNode => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

export default SubRoutes;
