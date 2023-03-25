import { FC } from "react";
import { Clock } from "./Clock";
import s from "./Footer.module.scss";

export const Footer: FC = () => {
	const year = new Date().getFullYear();

	// TODO: Add dynamic article counter
	const articles = 15;
	return (
		<footer className={s.footerContainer}>
			<div className={`${s.footerWrapper} container`}>
				<div className={s.copyWrapper}>
					<p className={s.copy}>ngNews © {year}</p>
					<p className={s.amountLabel}>Articles on page</p>
					<p className={s.amountWrapper}>{articles}</p>
				</div>
				<Clock />
			</div>
		</footer>
	);
};
