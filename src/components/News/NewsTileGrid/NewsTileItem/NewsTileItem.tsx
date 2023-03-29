import { FC } from "react";
import { HiExternalLink } from "react-icons/hi";
import { Article } from "@/types";
import { usePopup } from "@/hooks";
import { Popup } from "@/components";
import s from "./NewsTileItem.module.scss";

export const NewsTileItem: FC<Article> = (props: Article) => {
	const { title, description, content, publishedAt, source, url, urlToImage } =
		props;

	const { isOpen, toggle, close } = usePopup();

	const dateFormat = new Intl.DateTimeFormat("en");

	const domain = url.split("/")[2];

	return (
		<>
			<div className={s.itemContainer}>
				<img
					src={urlToImage || "/assets/placeholder.png"}
					alt={title}
					className={s.image}
				/>
				<h2 className={s.title} tabIndex={0} onClick={toggle}>
					{title}
				</h2>
				<p className={s.description}>{description}</p>
				<div className={s.itemFooter}>
					<span>{dateFormat.format(new Date(publishedAt))}</span>
					<span>●</span>
					<span className={s.urlWrapper}>
						<a href={url}>{domain}</a>
						<HiExternalLink />
					</span>
				</div>
			</div>
			{isOpen && (
				<Popup
					open={isOpen}
					onClose={close}
					title={title}
					content={content}
				/>
			)}
		</>
	);
};
