/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
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

	// useEffect(() => {
	// 	if (dataFetch) setData(dataFetch);
	// }, [dataFetch]);

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

		setData(filterData);
	}, [filter]);

	return (
		<>
			<Filter setFilter={setFilter} />
			<div
				className={dataSelected ? "-blur" : ""}
				style={{
					transition: "all 0.3s ease",
					height: "100%",
					minHeight: "calc(100vh - 50px)",
				}}
			>
				{data?.length === 0 && (
					<div
						style={{
							textAlign: "center",
							padding: "20px",
							color: "#fff",
							margin: "15% auto",
						}}
					>
						<h3>No data found</h3>
					</div>
				)}

				{data?.length > 0 && (
					<Grid data={data} setDataSelected={setDataSelected} />
				)}
			</div>
			<Footer />

			<Modal
				dataSelected={dataSelected}
				setDataSelected={setDataSelected}
			/>
		</>
	);
}

export default App;
