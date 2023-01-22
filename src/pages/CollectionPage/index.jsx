import React from 'react'
import SneakerCard from '../../components/SneakerCard'

import { allSneakersPage } from '../../data-base/allSneakersPage'

import Styles from "./collectionPage.module.scss"


export default function Index(props) {

	const sneakerList = allSneakersPage


	return (
		<>
			<section className={Styles.collection}>
				<div className="container">
					<div className={Styles.title}>
						Collection
					</div>

					<div className={Styles.allSneakers}>

						{props.searchValue ? sneakerList.filter((card) => card.cardName.toString().toLowerCase().includes(props.searchValue.toString().toLowerCase())).map((item, index) => (
							<SneakerCard
								key={index}
								index={item.id}
								rating={item.rating}
								sneakIMG={item.cardIMG}
								sneakName={item.cardName}
								sneakPrice={item.cardPrice}
								onAdd={(obj) => props.onClickAdd(obj)}
							/>
						)) :
						
						allSneakersPage.map((item, index) => (
							<SneakerCard
								key={index}
								index={item.id}
								rating={item.rating}
								sneakIMG={item.cardIMG}
								sneakName={item.cardName}
								sneakPrice={item.cardPrice}
								onAdd={(obj) => props.onClickAdd(obj)}
							/>
						))
						
						}
						
					</div>
				</div>
			</section>
		</>
	)
}
