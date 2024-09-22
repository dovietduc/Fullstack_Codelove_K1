import { useState } from "react";
import './App.css';

const App = () => {

	const [total, setTotal] = useState(localStorage.getItem('count') || 0);

	const handleClickAdd = () => {
		const total = localStorage.getItem('count');
		const totalNew = +total + 1;
		localStorage.setItem('count', totalNew);
		setTotal(totalNew);
	}

	function handleGetAllProduct() {
		const data = fetch('https://jsonplaceholder.typicode.com/posts');
		const successData = function(response) {
			response.json().then((json) => {
				console.log(json);
			});
		}

		data.then(successData);
		
		
	}


	return (
		<>
			<header>
				<h1>{total} sản phẩm</h1>
			</header>

			<main>
				<button onClick={handleClickAdd} className="change">Add Product</button>

				<section>
					<button onClick={handleGetAllProduct}>get All Product</button>
					<h1>Show all product</h1>
				</section>
			</main>
		</>

	);
}

export default App;