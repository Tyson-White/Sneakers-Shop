import Styles from "./sneakerPage.module.scss"

import {useParams} from "react-router-dom"

import { allSneakers, allSneakersList } from "../../data-base/allSneakers"

import React from 'react'

export default function Index() {

	const {id} = useParams();
	const sneaker = allSneakersList[id]

	return (
		<>
			<section className={Styles.sneakerPage}>

				<div className="container">

					<div className={Styles.sneakerinfo}>

						<div className={Styles.sneakerIMG}>
							<img src={sneaker.cardIMG} width={"100%"} alt="" />
						</div>
						<div className={Styles.sneakerPROP}>

							<div className={Styles.title}>
								{sneaker.cardName}
							</div>
							<div className={Styles.price}>
								{sneaker.cardPrice}
							</div>
							<div className={Styles.color}>
								Color: {sneaker.cardColor}
							</div>
							<div className={Styles.text}>
								<p>Properties: </p>
								{sneaker.properties}
							</div>

						</div>


					</div>

				</div>

			</section>
		</>
	)
}
