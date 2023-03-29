import { FC, useMemo } from "react";
import { useAppSelector } from "@/hooks";
import s from "./NewsComponent.module.scss";
import { NewsListItem } from "./NewsListItem";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const NewsComponent: FC = () => {
	const { view } = useAppSelector((state) => state.view);
	const { amount, country, news, query } = useAppSelector(
		(state) => state.news
	);

	console.log("query", query);
	const headingSubsidiary = useMemo(() => {
		if (query) {
			return query;
		}
		return String(country);
	}, []);

	return (
		<>
			<h1 className={s.heading}>
				News for
				<span className={s.headingSubsidiary}>
					{headingSubsidiary}{" "}
					<span className={s.headingAmount}>
						({amount} {amount === 1 ? "result" : "results"})
					</span>
				</span>
			</h1>
			{view === "list" &&
				news.map((newsItem) => (
					<NewsListItem key={newsItem.url} {...newsItem} />
				))}
		</>
	);
};
