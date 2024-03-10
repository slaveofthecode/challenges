import { useEffect, useRef, useState } from "react";
import Filter from "./components/Filter";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import "./styles/index.css";

function App() {
	const [data, setData] = useState([]);
	const [dataSelected, setDataSelected] = useState(null);
	const [filter, setFilter] = useState({
		title: "",
		fulltime: null,
	});

	const cacheDataRef = useRef(null);

	const getData = async () => {
		const response = await fetch(process.env.REACT_APP_API_URL);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		getData()
			.then((data) => {
				setData(data);
				cacheDataRef.current = data;
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		console.log("F", filter);

		const allData = cacheDataRef.current;
		let filterData = allData;

		const { title, fulltime } = filter;

		if (fulltime !== null)
			filterData = filterData.filter(
				(item) => item.fulltime === fulltime
			);

		if (title && title?.length)
			filterData = filterData.filter((item) =>
				item.title.toLowerCase().includes(title.toLowerCase())
			);

		console.log("filterData", filterData);

		setData(filterData);
	}, [filter]);

	return (
		<div className="App">
			<div className={dataSelected ? "-blur" : ""}>
				<Filter setFilter={setFilter} />
				<Grid data={data} setDataSelected={setDataSelected} />
			</div>
			<Modal
				dataSelected={dataSelected}
				setDataSelected={setDataSelected}
			/>
		</div>
	);
}

export default App;
