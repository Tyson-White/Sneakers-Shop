import React from 'react'
import Styles from './clearCart.module.scss'

import sadsmile from "../../assets/sadsmile.png"

export default function index() {
	return (
		<>
			<div className={Styles.clearCart}>

				<div className={Styles.content}>

					<h1>Cart empty</h1>
					<img src={sadsmile} width={150} alt="" />

				</div>

			</div>
		</>
	)
}
