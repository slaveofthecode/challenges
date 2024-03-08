import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Grid from "./components/Grid";
import Modal from "./components/Modal";

import "./styles/index.css";

function App() {
	const url = "https://6300ff309a1035c7f8fc2586.mockapi.io/jobposts";

	const [data, setData] = useState([]);
	const [dataSelected, setDataSelected] = useState(null);

	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	};

	useEffect(() => {
		getData()
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="App">
			<div className={dataSelected ? "-blur" : ""}>
				<Filter />
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
