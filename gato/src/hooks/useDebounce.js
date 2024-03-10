import { useRef } from "react";

const DEFAULT_TIME = 1000;

const useDebounce = () => {
	const debounceRef = useRef();

	const debounce = (cb, time = DEFAULT_TIME) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			cb();
		}, time);
	};

	return { debounce };
};

export default useDebounce;
