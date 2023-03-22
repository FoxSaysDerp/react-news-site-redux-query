import "@/styles/global.scss";
import { Layout } from "@/components/Layout/Layout";
import { Routes, RouteFactory } from "@/routes";

function App() {
	return (
		<Layout>
			<RouteFactory routes={Routes} />
		</Layout>
	);
}

export default App;
