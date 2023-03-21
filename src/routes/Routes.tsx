import { Home } from "@/pages/Home";
import { Route } from "./Routes.types";

export const Routes: Route[] = [
	{
		id: "path:/home",
		path: "/",
		name: "Home",
		component: <Home />,
	},
];
