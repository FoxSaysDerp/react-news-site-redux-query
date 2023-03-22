import { Modal } from "@mantine/core";

interface Props {
	opened: boolean;
	close: () => void;
}
export const Popup = (props: Props) => {
	const { opened, close } = props;
	return (
		<Modal opened={opened} onClose={close} title="Issues during development">
			<div>{/* TODO: Fill that */}</div>
		</Modal>
	);
};
