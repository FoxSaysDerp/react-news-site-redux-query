import { ReactNode } from "react";

export interface Route {
	id: string;
	path: string;
	name: string;
	component: ReactNode;
	subroutes?: Route[];
}
