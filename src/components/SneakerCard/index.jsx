import Styles from "./sneakerCard.module.scss"
import React from 'react'

import { NavLink } from "react-router-dom"


import starfill from "../../assets/icons/star-fill.svg"
import starnofill from "../../assets/icons/star-nofill.svg"
import add from "../../assets/icons/add.svg"
import check from "../../assets/icons/check.svg"

export default function Index (props) {

	const [added, setAdded] = React.useState(false)

	const [elem, setElem] = React.useState()

	const addToCart = (event) => {
		event.preventDefault()
		setAdded(!added)
		props.onAdd(
			{
				img: props.sneakIMG,
				name: props.sneakName,
				price: props.sneakPrice
			}
		)
	}

	return (
		<>
			<NavLink to={`/collection/${props.index}`}>
				<div className={Styles.card}>

					<img src={added ? check : add} width={35} alt="" className={Styles.addIcon} 
						onClick={addToCart}
					/>

					<img src={props.sneakIMG} width={"100%"} alt="sneaker" className={Styles.sneaker_img}/>

					<div className={Styles.sneaker_name}>{props.sneakName}</div>

					<div className={Styles.sneaker_rating}>

					{props.rating.map(item => (
						item === 1 ? <img src={starfill} alt="" /> : <img src={starnofill} alt=""/>
					))}

					</div>

					<div className={Styles.sneaker_price}>
						{`${props.sneakPrice}$` } 
					</div>

				</div>
			</NavLink>
		</>
	)
}

