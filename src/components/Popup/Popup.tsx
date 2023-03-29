import { useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";

import { assertIsNode } from "@/utilities";
import { usePortal } from "@/hooks";
import s from "./Popup.module.scss";

interface Props {
	open: boolean;
	onClose: () => void;
	title?: string;
	content?: string;
}

export const Popup = (props: Props) => {
	const { open, onClose, title, content } = props;

	const wrapperRef = useRef<HTMLDivElement>(null);
	const { render } = usePortal();

	const handleClickOutside = ({ target }: MouseEvent): void => {
		assertIsNode(target);
		if (wrapperRef.current && !wrapperRef.current.contains(target)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	if (!open) {
		return null;
	}

	return render(
		<div className={s.popupBackground}>
			<div className={`${s.popupContainer} container`}>
				<div className={s.popupWrapper} ref={wrapperRef}>
					<button
						type="button"
						className={s.closeButton}
						onClick={onClose}
					>
						<MdClose />
					</button>
					{title && <h3 className={s.popupHeading}>{title}</h3>}
					<p className={s.popupContent}>{content}</p>
				</div>
			</div>
		</div>
	);
};
