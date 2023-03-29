import { FC } from "react";
import { useAppSelector } from "@/hooks";
import s from "./NewsComponent.module.scss";
import { NewsListItem } from "./NewsListItem";
import { NewsTileGrid } from "./NewsTileGrid";

export const NewsComponent: FC = () => {
	const { view } = useAppSelector((state) => state.view);
	const { amount, country, news, query } = useAppSelector(
		(state) => state.news
	);

	const headingSubsidiary = query ?? String(country);

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
			{view === "tiles" && <NewsTileGrid articles={news} />}
		</>
	);
};
