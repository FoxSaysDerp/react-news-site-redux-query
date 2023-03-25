import { useAppSelector } from "@/hooks";
import { FC } from "react";
import { Clock } from "./Clock";
import s from "./Footer.module.scss";


export const Footer: FC = () => {
	const articlesAmount = useAppSelector((state) => state.news.amount);

	const year = new Date().getFullYear();

	return (
		<footer className={s.footerContainer}>
			<div className={`${s.footerWrapper} container`}>
				<div className={s.copyWrapper}>
					<p className={s.copy}>ngNews © {year}</p>
					<p className={s.amountLabel}>Articles on page</p>
					<p className={s.amountWrapper}>{articlesAmount}</p>
				</div>
				<Clock />
			</div>
		</footer>
	);
};
