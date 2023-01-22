import React from 'react'

import Styles from "./slider.module.scss"

import SneakerCard from '../SneakerCard'

import arrL from "../../assets/icons/arrow-left.svg"
import arrR from "../../assets/icons/arrow-right.svg"

export default function Index(props) {

	const [pos, setPos] = React.useState(0)


	const changeSliderRight = () => {

		if (props.list.length > 4) {
			
			if (pos === -props.list.length * 357 + 4 * 357) {
				setPos(0)
			} else {
				setPos(pos - 357)
			}

		}
		
	}

	const changeSliderLeft = () => {

		if (props.list.length > 4) {

			if (pos === 0) {
				setPos(-props.list.length * 357 + 4 * 357)
			} else {
				setPos(pos + 357)
			}

		}
	
	}

	return (
		<>
			<div className={Styles.cards_container}
							style={{transform: `translate(${pos}px, ${0}px)`,
							width: `${props.list.length * 357}px`
						}}

						>
							{props.list.map((item, index) => (

								<SneakerCard
									key={index}
									index={item.id}
									rating={item.rating}
									sneakIMG={item.cardIMG}
									sneakName={item.cardName}
									sneakPrice={item.cardPrice}
									onAdd={(obj) => props.onClickAdd(obj)}
								/>

							))}
						</div>
						<div className={Styles.arrows}>

							<img src={arrL} alt="arrow-left" className={`${Styles.arrow} ${Styles.arrowL}`}
								onClick={changeSliderLeft}
							/>
							<img src={arrR} alt="arrow-right" className={`${Styles.arrow} ${Styles.arrowR}`}
								onClick={changeSliderRight}
							/>
							
						</div>
		</>
	)
}
