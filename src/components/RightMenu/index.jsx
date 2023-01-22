import React from 'react'

import Styles from "./rightMenu.module.scss"

import close from "../../assets/icons/close.svg"

export default function Index(props) {
	return (
		<>
			<div className={props.showBar ? `${Styles.rightMenu} ${Styles.show}` : Styles.rightMenu}>
				<img src={close} width={40} alt="" className={Styles.close}
					onClick={props.onClickClose}
				/>
			</div>
		</>
	)
}
