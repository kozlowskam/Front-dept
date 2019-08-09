import React from 'react';

const Intro = (props) => {

	const background = props.item.image ? (require(`../static/images/${props.item.image}`)) : null

	return (
		<div className="b-intro" style={{ backgroundImage: `url(${background})` }}>
			<div className="b-intro__wrapper">
				<div className="b-intro__title">
					<h1>{props.title.toUpperCase()}</h1>
				</div>
				<a className="b-intro__button" href={props.item.link} target="_blank" rel="noopener noreferrer">VIEW CASE</a>
			</div>
		</div >
	)
}

export default Intro