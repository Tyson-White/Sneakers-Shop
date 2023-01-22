import React from 'react'
import { NavLink } from 'react-router-dom'

import Styles from "./mainPage.module.scss"

import Slider from '../../components/Slider'

/* data-base*/
import { featured } from "../../data-base/featured"
import { bestseller } from '../../data-base/bestSeller'
/* data-base*/

import bigImg from "../../assets/mainpage-img.jpg"

export default function index(props) {
	return (
		<>
		<div className={Styles.container}>

			<section className={Styles.big_img}>
				<img src={bigImg} width={'100%'} alt="sneakers" />
			</section>

			<section className={Styles.featured}>
				
				<div className={Styles.title}>
					featured 
					<p>PRODUCTS</p>
					<div className={Styles.bg_text}>
						FEATURED
					</div>
				</div>

				<div className={Styles.cards_container}>
					
				<Slider 
						list={featured}
						onClickAdd={(item) => props.onClickAdd(item)}
					/>

				</div>
			</section>

			<section className={Styles.best_seller}>

				<div className={Styles.title}>
						best seller
						<p>PRODUCTS</p>
						<div className={Styles.bg_text}>
						BEST SELLER
						</div>

				</div>
				
				<div className={Styles.best_seller_grid}>
					
				<Slider 
						list={bestseller}
						onClickAdd={(item) => props.onClickAdd(item)}
					/>

				</div>
				<NavLink to={'/collection'}>
					<button className={Styles.view_all}>VIEW ALL PRODUCTION</button>
				</NavLink>
			</section>

		</div>	
		</>
	)
}
