import React from 'react';

const Brands = (props) => {

	const logos = props.clients.brands.map((item, i) => {
		return <div className="c-brands__item" key={i}>
			<img className="c-brands__image" src={require(`../static/logos/${item.logo}`)} alt="logo" />
		</div>
	})


	return (
		<div className="c-brands">
			<div className="c-brands__title">
				<h2>{props.clients.title.toUpperCase()}</h2>
			</div>
			<div className="c-brands__subtitle">
				{props.clients.text}
			</div>
			<div className="c-brands__wrap">
				{logos}
			</div>
		</div>
	)
}

export default Brands