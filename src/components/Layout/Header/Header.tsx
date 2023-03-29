import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "@mantine/core";
import { AiFillInfoCircle } from "react-icons/ai";

import { store } from "@/redux/store";
import { Popup } from "@/components/Popup";
import { infoPopup } from "@/constants";
import { usePopup } from "@/hooks";
import { ViewChanger } from "./ViewChanger";
import s from "./Header.module.scss";

export const Header = forwardRef<HTMLElement>((_, ref) => {
	const { isOpen, close, toggle } = usePopup();

	return (
		<Provider store={store}>
			<header ref={ref} className={s.header}>
				<Link to="/">
					<img src="/assets/logo.png" alt="ngNews" className={s.logo} />
				</Link>
				<div className={s.itemsWrapper}>
					<ViewChanger />
					<Button type="button" onClick={toggle} variant="default">
						<AiFillInfoCircle fontSize={20} />
						<span style={{ marginLeft: 10 }}>Click me!</span>
					</Button>
				</div>
			</header>
			{isOpen && (
				<Popup
					open={isOpen}
					onClose={close}
					title={infoPopup.title}
					content={infoPopup.content}
				/>
			)}
		</Provider>
	);
});
