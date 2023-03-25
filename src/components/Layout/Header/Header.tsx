import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "@mantine/core";
import { AiFillInfoCircle } from "react-icons/ai";

import { store } from "@/redux/store";
import { ViewChanger } from "./ViewChanger/ViewChanger";
import s from "./Header.module.scss";
import { Popup } from "./Popup";

export const Header = forwardRef<HTMLElement>((_, ref) => {
	const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);
	
	const toggleModal = (): void => {
		setisPopupOpen((prevState) => !prevState)
	}

	return (
		<Provider store={store}>
			<header ref={ref} className={s.header}>
				<Link to="/">
					<img src="/assets/logo.png" alt="ngNews" className={s.logo} />
				</Link>
				<div className={s.itemsWrapper}>
					<ViewChanger />
					<Button type="button" onClick={toggleModal} variant="default">
						<AiFillInfoCircle fontSize={20} />
						<span style={{ marginLeft: 10 }}>Click me!</span>
					</Button>
				</div>
			</header>
			{isPopupOpen && <Popup open={isPopupOpen} onClose={() => setisPopupOpen(false)}/>}
		</Provider>
	);
});
