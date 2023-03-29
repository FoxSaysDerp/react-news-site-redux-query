import { FC } from "react";
import { Article } from "@/types";
import { NewsTileItem } from "./NewsTileItem";
import s from "./NewsTileGrid.module.scss";

interface Props {
	articles: Article[];
}
export const NewsTileGrid: FC<Props> = (props: Props) => {
	const { articles } = props;
	return (
		<div className={s.newsTileGrid}>
			{articles.map((article) => (
				<NewsTileItem key={article.url} {...article} />
			))}
		</div>
	);
};
