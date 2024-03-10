/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useFetch = (url, cached = false) => {
	const [data, setData] = useState(null);

	const dataChed = useRef(null);

	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	};

	useEffect(() => {
		getData().then((d) => {
			setData(d);
			if (cached) dataChed.current = d;
		});
	}, []);

	return {
		data,
	};
};

export default useFetch;
