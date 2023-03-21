import { ReactNode } from "react";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
	children: ReactNode;
}
export const Layout = (props: Props) => {
	const { children } = props;
	return (
		<>
			<Header />
			<main>{children}</main>
			<Aside />
			<Footer />
		</>
	);
};
