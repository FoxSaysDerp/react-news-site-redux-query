import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { SegmentedControl, Center, Box } from "@mantine/core";
import { BiListUl, BiRectangle } from "react-icons/bi";

import { RootState, AppDispatch } from "@/redux/store";
import { setView, View } from "@/redux/store/viewSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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
