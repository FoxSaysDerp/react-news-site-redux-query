import { FC } from "react";
import { Article } from "@/types";
import { HiExternalLink } from "react-icons/hi";
import s from "./NewsListItem.module.scss";
import { usePopup } from "@/hooks";
import { Popup } from "@/components";

const Separator = () => <span>●</span>;

export const NewsListItem: FC<Article> = (props: Article) => {
	const { title, content, publishedAt, source, url } = props;

	const { isOpen, toggle, close } = usePopup();

	const dateFormat = new Intl.DateTimeFormat("en");

	const domain = url.split("/")[2];

	return (
		<>
			<div className={s.itemContainer}>
				<span className={s.headerWrapper}>
					<h2 className={s.header} tabIndex={0} onClick={toggle}>
						{title}
					</h2>
					<Separator />
					<span>{source.name}</span>
				</span>
				<div className={s.itemFooter}>
					<span>{dateFormat.format(new Date(publishedAt))}</span>
					<Separator />
					<span className={s.urlWrapper}>
						<a href={url} target="_blank">
							{domain}
						</a>
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
