import "@/styles/global.scss";
import { Layout } from "@/components/Layout/Layout";
import { Routes, RouteFactory } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Layout>
					<RouteFactory routes={Routes} />
				</Layout>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
