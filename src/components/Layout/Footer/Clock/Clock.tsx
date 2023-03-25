import { useState, useEffect, FC } from "react";
import s from "./Clock.module.scss";

export const Clock: FC = () => {
	const [time, setTime] = useState<Date>(new Date());

	useEffect(() => {
		const timesetInterval = setInterval(() => setTime(new Date()), 1000);

		return () => {
			clearInterval(timesetInterval);
		};
	});

	const padder = (number: number): string => {
		const string = number.toString();
		if (string.length < 2) {
			return string.padStart(2, "0");
		}
		return string;
	};

	const hours = padder(time.getHours());
	const minutes = padder(time.getMinutes());
	return (
		<div className={s.clock}>
			{hours}
			<span className={s.divider}>:</span>
			{minutes}
		</div>
	);
};
