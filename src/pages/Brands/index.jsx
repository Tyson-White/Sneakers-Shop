import React from 'react'

import Styles from "./brands.module.scss"
import Slider from "../../components/Slider"

import { allSneakers } from '../../data-base/sneakersFilter'

export default function index(props) {
	return (
		<>
			<section className={Styles.brands}>
				<div className="container">
					{allSneakers.map(item => (

						<div className={Styles.brand}>
							<div className={Styles.title}>
								{item.name.toUpperCase()}
							</div>

							<Slider 
								list={item.list}
								onClickAdd={(item) => props.onClickAdd(item)}
							/>

						</div>

					))}
				</div>
			</section>
		</>
	)
}
