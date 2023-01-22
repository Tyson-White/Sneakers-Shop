import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from "./header.module.scss"

import logo from "../../assets/site-logo.jpg"

/* icons, img */
import fb from "../../assets/icons/facebook.svg"
import inst from "../../assets/icons/instagram.svg"
import yt from "../../assets/icons/youtube.svg"
import twit from "../../assets/icons/twitter.svg"
import src from "../../assets/icons/search.svg"
import burg from "../../assets/icons/burger.svg"
/* icons, img */

export default function Index(props) {

	const [search, setSearch] = React.useState(false)

	const changeSearch = (event) => {
		props.onChangeSearch(event.target.value)
	}

	const showSearch = () => {
		console.log(search)
		setSearch(!search)
	}

	return (
		<>
			<div className={Styles.sitelogo}>
				<img src={logo} width={170} alt="" />
			</div>

			<header className={Styles.header}>

				<div className={Styles.container}>

					<div className={Styles.header_menu}>

						<ul className={`${Styles.header_elem} ${Styles.icons}`}>
						
							<li className={Styles.icon}>
								<img src={fb} width={23} alt="facebook" />
							</li>
							<li className={Styles.icon}>
								<img src={yt} width={23} alt="youtube" />
							</li>
							<li className={Styles.icon}>
								<img src={inst} width={23} alt="instagram" />
							</li>
							<li className={Styles.icon}>
								<img src={twit} width={23} alt="twitter" />
							</li>

						</ul>
						
						<ul className={`${Styles.header_elem} ${Styles.header_nav}`}>

							<NavLink to={'/'}>
								<li className={Styles.nav_elem}>Home</li>
							</NavLink>

							<NavLink to={'/collection'}>
								<li className={Styles.nav_elem}>Collection</li>
							</NavLink>

							<NavLink to={'/brands'}>
								<li className={Styles.nav_elem}>Brands</li>
							</NavLink>
							
							<NavLink to={"/cart"}>
								<li className={Styles.nav_elem}>Cart</li>
							</NavLink>
							
						</ul>
						
						<ul className={`${Styles.header_elem} ${Styles.advance}`}>

							<li className={Styles.advance_elem}>

								<NavLink to={'/collection'}>
									<input type="text" placeholder="Search..." className={search ? 'searchwindow show' : 'searchwindow'}
										onChange={changeSearch}
									>
									</input>
								</NavLink>

								<img src={src} width={23} alt="search" onClick={showSearch}/>
							</li>
							<li className={Styles.advance_elem}>
								<img src={burg} width={30} alt="menu" 
									onClick={props.onClickBurger}
								/>
							</li>

						</ul>
						

					</div>

				</div>

			</header>
		</>
	)

}
