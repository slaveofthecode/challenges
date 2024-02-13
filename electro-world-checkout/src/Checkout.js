import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons.js";
import { getProducts } from "./dataService";

const Product = ({
	id,
	name,
	availableCount,
	price,
	orderedQuantity,
	total,
	setUpdateProduct,
}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{availableCount}</td>
			<td>${price}</td>
			<td>{orderedQuantity}</td>
			<td>${total}</td>
			<td>
				<button
					className={styles.actionButton}
					disabled={availableCount === orderedQuantity}
					onClick={() =>
						setUpdateProduct((d) => {
							return d.map((p) => {
								if (p.id === id) {
									return {
										...p,
										orderedQuantity: p.orderedQuantity + 1,
										total:
											Math.round(
												(p.total + p.price) * 100
											) / 100,
									};
								}
								return p;
							});
						})
					}
				>
					+
				</button>
				<button
					className={styles.actionButton}
					disabled={total === 0}
					onClick={() => {
						setUpdateProduct((d) => {
							return d.map((p) => {
								if (p.id === id) {
									return {
										...p,
										orderedQuantity: p.orderedQuantity - 1,
										total:
											Math.round(
												(p.total - p.price) * 100
											) / 100,
									};
								}
								return p;
							});
						});
					}}
				>
					-
				</button>
			</td>
		</tr>
	);
};

const Checkout = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		setLoading(true);
		getProducts()
			.then((data) => {
				const products = data.map((d) => {
					return {
						...d,
						orderedQuantity: 0,
						total: 0,
					};
				});

				setData(products);
			})
			.catch((err) => {
				console.error("There was an error " + err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<header className={styles.header}>
				<h1>Electro World</h1>
			</header>
			<main>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Product ID</th>
							<th>Product Name</th>
							<th># Available</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{loading && (
							<tr>
								<td colSpan={8}>
									<LoadingIcon />
								</td>
							</tr>
						)}
						{data?.map((dp) => {
							return (
								<Product
									key={dp.id}
									{...dp}
									setUpdateProduct={setData}
								/>
							);
						})}
					</tbody>
				</table>
				<h2>Order summary</h2>

				<p>
					{data &&
					data.reduce((acc, p) => {
						return acc + p.total;
					}, 0) > 1000
						? `Discount: $ ${(
								data &&
								data.reduce((acc, p) => {
									return acc + p.total;
								}, 0) * 0.1
						  ).toFixed(2)}`
						: ""}
				</p>
				<p>
					Total: ${" "}
					{data &&
					data.reduce((acc, p) => {
						return acc + p.total;
					}, 0) > 1000
						? (
								data?.reduce((acc, p) => {
									return acc + p.total;
								}, 0) * 0.9
						  ).toFixed(2)
						: data
								?.reduce((acc, p) => {
									return acc + p.total;
								}, 0)
								.toFixed(2)}
				</p>
			</main>
		</div>
	);
};

export default Checkout;
