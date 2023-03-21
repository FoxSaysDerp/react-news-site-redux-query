import { forwardRef } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = forwardRef<HTMLElement>((_, ref) => {
	return (
		<header ref={ref} className={s.header}>
			<Link to="/">
				<img src="/assets/logo.png" alt="ngNews" className={s.logo} />
			</Link>
			<div>
				<button type="button"></button>
			</div>
		</header>
	);
});
