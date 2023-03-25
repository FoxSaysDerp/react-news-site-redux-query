import { Country } from "@/types";

export const getFlagEmoji = (countryCode: Country["code"]): string => {
	const codePoints = countryCode
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
};
