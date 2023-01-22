import React from 'react'
import { NavLink } from 'react-router-dom'

import Styles from "./cart.module.scss"
import ClearCart from "../../components/ClearCart"


export default function Index(props) {

	const [addedList, setAddedList] = React.useState(props.item)

	let count = 0

	const exportCout = () => {
		props.onClickPay(count)
	}

	for (let i=0; i < addedList.length; i++) {
		count += addedList[i].price
	}

	return (
		<>
			<section className={Styles.cart}>

				<div className="container">

					{addedList.length > 0 ? 
					<>
					<div className={Styles.title}>Cart</div>

					<div className={Styles.sum}>
							Total price: <p>{count}$</p>
						</div>

					<div className={Styles.cart_wrapper}>
						{addedList.map(obj => (

							

							<div className={Styles.elem}>

								<div className={Styles.img}>
									<img src={obj.img} width={200} alt="" />
								</div>
								
								<div className={Styles.info}>

									<div className={Styles.name}>
										{obj.name}
									</div>

									<div className={Styles.price}>
										{obj.price}$
									</div>

								</div>

							</div>
						))}
							<div className={Styles.paywrap}>
								<NavLink to={'/pay'}>
									<button className={Styles.pay} onClick={exportCout}>PAY</button>
								</NavLink>
							</div>
					</div>
					
					</> : <ClearCart/>


				}

				</div>

			</section>
		</>
	)
}
