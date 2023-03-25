import { SegmentedControl, Center } from "@mantine/core";
import { BiListUl, BiRectangle } from "react-icons/bi";

import { setView, View } from "@/redux/store/viewSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

export const ViewChanger = () => {
	const dispatch = useAppDispatch();
	const view = useAppSelector((state) => state.view.view);

	return (
		<SegmentedControl
			value={view}
			onChange={(value) => dispatch(setView(value as View))}
			data={[
				{
					label: (
						<Center>
							<BiListUl />
							<span style={{ marginLeft: 10 }}>List</span>
						</Center>
					),
					value: "list",
				},
				{
					label: (
						<Center>
							<BiRectangle />
							<span style={{ marginLeft: 10 }}>Tiles</span>
						</Center>
					),
					value: "tiles",
				},
			]}
		/>
	);
};
