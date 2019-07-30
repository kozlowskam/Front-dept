import React from 'react';
import common from '../data/common';
import Header from "../partials/Header";
import { Link } from 'react-router-dom';


class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeLng: {},
			isOpen: true,
		};
		this.menuDiv = React.createRef();
	}

	componentDidMount() {
		if (common.lang) {
			this.setState({
				activeLng: common.lang[1]
			})
		};
	}

	handleClick(id) {
		document.body.classList.remove('menu-open');
		this.setState({
			isOpen: false
		})
	}

	render() {
		const { activeLng, isOpen } = this.state;

		const menuList = (common.menu && common.menu.length > 0) ? (
			common.menu.map((item, i) => (
				<div className="l-menu__link" key={i}>
					<Link to={`/${item.title}`} to={{ pathname: `/${item.title}`, state: item.id }}
						onClick={() => this.handleClick(item.id)}>
						<div className="l-menu__link-icon" />
						<div className="l-menu__link-title">
							{item.title.toUpperCase()}
						</div>
					</Link>
				</div>
			))
		) : null

		const countryList = (common.lang && common.lang.length > 0) ? (
			common.lang.map((item, i) => (
				<div className={"l-menu__left-item" + (activeLng && activeLng.country && activeLng.country.includes(item.country)? " is-active" : "") } key={i}>
					{item.country.toUpperCase()}
				</div>
			))
		) : null

		const countriesTitle = activeLng.title ? (
			<div className="l-menu__left-title">
				{activeLng.title.toUpperCase()}
			</div>
		) : (
				(common.lang && common.lang.length > 0) ? (
					<div className="l-menu__left-title">
						{common.lang[1].title.toUpperCase()}
					</div>
				) : null
			)

		const socials = (common.socials && common.socials.length > 0) ? (
			common.socials.map((item, i) => (
				<a className="l-menu__left-item" href={item.url} key={i}>
					{item.title.toUpperCase()}
				</a>
			))
		) : null

		return (
			<React.Fragment>
				<Header isOpen={isOpen} />
				<div id="menuDiv" className="l-menu">
					<div className="l-menu__left">
						<div className="l-menu__lang">
							{countriesTitle}
							{countryList}
						</div>
						<div className="l-menu__socials">
							{socials}
						</div>
					</div>
					<div className="l-menu__menu-wrap">
						{menuList}
					</div>
				</div>
			</React.Fragment>

		)
	}
}

export default Menu