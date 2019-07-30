import React from 'react';

const Quote = (props) => {

	return (
		<div className="c-quote">
			<div className="c-quote__text">
				{props.item.text}
			</div>
			<div className="c-quote__subtitle">
				{props.item.subtitle.toUpperCase()}
			</div>
		</div>
	)
}

export default Quote