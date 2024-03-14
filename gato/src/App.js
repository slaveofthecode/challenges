/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import NotFoundData from "./components/NotFoundData";
import useFetch from "./hooks/useFetch";

import "./styles/index.css";

function App() {
	const [data, setData] = useState([]);
	const [dataSelected, setDataSelected] = useState(null);
	const [filter, setFilter] = useState({
		title: "",
		fulltime: null,
	});

	const { data: dataFetch } = useFetch(process.env.REACT_APP_API_URL, true);

	useEffect(() => {
		let filterData = dataFetch;

		const { title, fulltime } = filter;

		if (fulltime !== null)
			filterData = filterData.filter(
				(item) => item.fulltime === fulltime
			);

		if (title && title?.length)
			filterData = filterData.filter((item) =>
				item.title.toLowerCase().includes(title.toLowerCase())
			);

		console.log("Filter data", filterData);
		setData(filterData);
	}, [filter]);

	const modalMemo = useMemo(() => {
		return (
			<Modal
				dataSelected={dataSelected}
				setDataSelected={setDataSelected}
			/>
		);
	}, [dataSelected]);

	return (
		<>
			<Filter setFilter={setFilter} />

			<main className={` main ${dataSelected ? "-blur" : ""}`}>
				{data?.length === 0 && <NotFoundData />}
				{data?.length > 0 && (
					<Grid data={data} setDataSelected={setDataSelected} />
				)}
			</main>

			<Footer />

			{modalMemo}
		</>
	);
}

export default App;
