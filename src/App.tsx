import "@/styles/global.scss";
import "normalize.css";
import { Layout } from "@/components/Layout/Layout";
import { Routes, RouteFactory } from "@/routes";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Layout>
			<Provider store={store}>
				<RouteFactory routes={Routes} />
			</Provider>
		</Layout>
	);
}

export default App;
