import React from 'react';

const CardSmall = (props) => {

	return (
		<div className="c-card-small">
			{props.item.cases.map((item, i) => {
				return <div className="c-card-small__wrapper" key={i}>
					<div className="c-card__content">
						<div className="c-card-small__company">
							{item.company}
						</div>
						<h2 className="c-card-small__title">
							{item.title}
						</h2>
						<a className="c-card-small__button" href={item.link} target="_blank" rel="noopener noreferrer">VIEW CASE</a>
					</div>
				</div>
			})}
		</div>
	)
}

export default CardSmall