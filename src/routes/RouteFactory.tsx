import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Route as RouteType } from "./Routes.types";

interface Props {
	routes: RouteType[];
}
export const RouteFactory: FC<Props> = (props: Props) => {
	const { routes } = props;
	return (
		<Routes>
			{routes.map((route: RouteType) => {
				if (route.subroutes) {
					return (
						<Route path={route.path} key={route.id}>
							{route.subroutes.map((subRoute: RouteType) => {
								if (subRoute.path === "/") {
									return (
										<Route
											index
											element={subRoute.component}
											key={route.id}
										/>
									);
								}
								return (
									<Route
										path={subRoute.path}
										element={subRoute.component}
										key={route.id}
									/>
								);
							})}
						</Route>
					);
				}
				return null;
			})}
		</Routes>
	);
};
