import { Route } from "./Routes.types";
import { Home, Countries, CountryPage } from "@/pages";

export const Routes: Route[] = [
	{
		id: "path:/home",
		path: "/",
		name: "Home",
		component: <Home />,
	},
   {
      id: 'path:/country',
      path: '/country',
      subroutes: [
         {
            id: 'path:/country:index',
            path: '/',
            name: 'Countries',
            component: <Countries />
         },
         {
            id: 'path:/country/:country',
            path: ':country',
            name: 'Country Page',
            component: <CountryPage />
         }
      ]
   }
];
