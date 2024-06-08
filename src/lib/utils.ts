import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Returns the list formatted.
 */
export function formatList({
	list,
	options = {
		style: "long",
		type: "conjunction",
	},
}: {
	list: Array<string>;
	options?: Intl.ListFormatOptions;
}): string {
	return new Intl.ListFormat("es", options).format(list);
}
