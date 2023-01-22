import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* pages */
import MainPage from "./pages/MainPage"
import Brands from "./pages/Brands"
import CollectionPage from "./pages/CollectionPage"
import SneakerPage from "./pages/SneakerPage"
import Cart from "./pages/Cart"
import Pay from "./pages/PayPage"
/* pages */

/* components */
import Header from "./components/Header"
import Footer from "./components/Footer";
import RightMenu from "./components/RightMenu"
/* components */


function App() {

	const [searchValue, setSearchValue] = React.useState('')

	const [showBar, setShowBar] = React.useState(false)

	const [itemCart, setItemCart] = React.useState([])

	const [count, setCount] = React.useState(0)

	const setSearch = (value) => {
		setSearchValue(value)
		console.log(searchValue)
	}

	const openBar = () => {
		setShowBar(!showBar)
	}

	const exportToCart = (item) => {
		setItemCart(itemCart => [...itemCart, item])
	}

	const exportCountToPay = (item) => {
		setCount(item)
	}

  return (
    <div className="App">
			<Router>
				<Header
					onChangeSearch={(value) => setSearch(value)}
					onClickBurger={openBar}
				/>

				<RightMenu
					showBar={showBar}
					onClickClose={openBar}
				/>
				
				<Routes>

					<Route path="/" element={<MainPage
						onClickAdd={(item) => exportToCart(item)}
					/>}
					></Route>

					<Route path="/collection" element={<CollectionPage
						searchValue={searchValue}
						onClickAdd={(item) => exportToCart(item)}
					/>}></Route>

					<Route path="/collection/:id" element={<SneakerPage
						onClickAdd={(item) => exportToCart(item)}
					/>}
					></Route>

					<Route path="/brands" element={<Brands
						onClickAdd={(item) => exportToCart(item)}
					/>}
					></Route>

					<Route path="/cart" element={<Cart
						onClickPay={(item) => exportCountToPay(item)}
						item={itemCart}
					/>}></Route>

					<Route path="/pay" element={<Pay
						price={count}
					/>}
						
					></Route>

				</Routes>

				<Footer/>
			</Router>
    </div>
  );
}

export default App;
