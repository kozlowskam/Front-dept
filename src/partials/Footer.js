import React from 'react';
import common from '../data/common';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

	handleClick() {
		document.getElementById("main").scrollTo(0, 0)
	}

	render() {
		const menuList = (common.menu && common.menu.length > 0) ? (
			common.menu.map((item, i) => (
				<div className="l-footer__menu-item" key={i}>
					<Link to={`/${item.title}`} to={{ pathname: `/${item.title}`, state: item.id }}
						onClick={() => this.handleClick(item.id)}>
						{item.title.toUpperCase()}
					</Link>
				</div>
			))
		) : null

		const socials = (common.socials && common.socials.length > 0) ? (
			common.socials.map((item, i) => (
				<a className="l-footer__socials-item" href={item.url} key={i} target="_blank" rel="noopener noreferrer">
					<img src={require(`../static/icons/${item.icon}`)} alt={item.title} />
				</a>
			))
		) : null

		const info = (common.info && common.info.length > 0) ? (
			common.info.map((item, i) => {
				return (item.url) ? (
					<a className="l-footer__info-item" href={item.url} target="_blank" rel="noopener noreferrer" key={i}>{item.title}</a>
				) : (
						<div className="l-footer__info-item" key={i}>{item.title}</div>
					)
			})
		) : null

		return (
			<div className="l-footer">
				<div className="l-footer__inner">
					<div className="l-footer__wrapper">
						<div className="l-footer__brand">
							<img className="l-footer__brand-inner" src={require('../static/images/logo-white.png')} alt="logo" />
						</div>
						<div className="l-footer__menu">
							{menuList}
						</div>
						<div className="l-footer__socials">
							{socials}
						</div>
					</div>
					<div className="l-footer__info">
						{info}
					</div>
				</div>
				<div className="l-footer__aside" onClick={()=> this.props.toTop()}>
					<img className="l-footer__brand-inner" src={require('../static/icons/arrow-up.png')} alt="logo" />
					TOP
				</div>
			</div>
		)
	}
}

export default Footer