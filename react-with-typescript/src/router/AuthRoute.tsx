import React, { ReactElement, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export const fakeAuth = {
	isAuthenticated: true,
	authenticate(cb): any {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
		return null;
	},
	signout(cb): any {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
		return null;
	},
};

export default function AuthRoute({ children, ...rest }: RouteProps): ReactElement {
	return (
		<Route
			{...rest}
			render={({ location }): ReactNode =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
