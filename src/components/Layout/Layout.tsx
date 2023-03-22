import { useState, createRef, ReactNode, useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
	children: ReactNode;
}
export const Layout = (props: Props) => {
	const { children } = props;
	const [headerSpace, setHeaderSpace] = useState<number>(0);
	const headerRef = createRef<HTMLElement>();

	const ADDITIONAL_SPACING = 15;

	useEffect(() => {
		if (headerRef.current) {
			const { offsetHeight } = headerRef.current;
			setHeaderSpace(offsetHeight + ADDITIONAL_SPACING);
		}
	}, [headerRef]);
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{ colorScheme: "dark" }}
		>
			<Header ref={headerRef} />
			<span style={{ display: "block", height: headerSpace }} aria-hidden />
			<main>{children}</main>
			<Aside />
			<Footer />
		</MantineProvider>
	);
};
