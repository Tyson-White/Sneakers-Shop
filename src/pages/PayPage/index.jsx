import React from 'react'

import Styles from "./pay.module.scss"

import paypal from '../../assets/icons/paypal.svg'
import qiwi from '../../assets/icons/qiwi.svg'
import sber from '../../assets/icons/sberbank.svg'
import yandex from '../../assets/icons/yandex.svg'
import googlepay from "../../assets/icons/googlepay.svg"

export default function Index(props) {

	const payList = [
		{
			name: 'paypal',
			img: paypal
		},
		{
			name: 'qiwi',
			img: qiwi
		},
		{
			name: 'sberbank',
			img: sber
		},
	]
	
	const [selected, setSelected] = React.useState('')

	const sel = (item) => {
		setSelected(item.name)
		console.log(item.name)
	}

	return (
		<>

		<div className={Styles.pay_wrapper}>

			<div className={Styles.cont}>
				
				<div className={Styles.info}>

					<div className={Styles.title}> Payment  </div>

					<div className={Styles.payWay}>



						{payList.map(obj => (

							<div className={selected === obj.name ? `${Styles.logo} ${Styles.selected}` : Styles.logo}
								onClick={() => sel(obj)}
							>
								<img src={obj.img} width={40} alt="" />
							</div>

						))}

						

					</div>
						<div className={Styles.inputStyle}>
							<p>Enter email</p>
							<input type="text"/>
						</div>

					<div className={Styles.totalPrice}>

						To pay: <span>{props.price}$</span>

					</div>

					<div className={Styles.details}>Payment details</div>
					
				</div>

				<div className={Styles.payment}>
					<div className={Styles.title}>Payment by <span>{selected}</span></div>
					<div className={Styles.overWay}>
						<div className={Styles.overWayElem}>
							<img src={yandex} width={50} alt="yandex" />
						</div>
						<div className={Styles.overWayElem}>
							<img src={googlepay} width={50} alt="googlepay" />
						</div>
					</div>
					<div className={Styles.inputStyle}>
							<input type="text" placeholder='Card number'/>
					</div>
					<div className={Styles.cardInfo}>
						<div className={Styles.inputStyle}>
								<input type="text" placeholder='MM/YY'/>
						</div>
						<div className={Styles.inputStyle}>
								<input type="text" placeholder='CVC/CVV'/>
						</div>
					</div>
					<button className={Styles.payButton}>PAY</button>
				</div>
			</div>

		</div>

		</>
	)
}
