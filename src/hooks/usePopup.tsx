import { useState } from "react";

export const usePopup = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen((prevState) => !prevState);
	};

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return { isOpen, open, close, toggle };
};
