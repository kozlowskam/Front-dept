import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		}
	}

	componentDidMount() {
		if (document.body.classList.contains('menu-open')) {
			this.setState({
				menuOpen: true
			})
		}
	}

	menuToggle() {
		if (document.body.classList.contains('menu-open')) {
			document.body.classList.remove('menu-open');
			this.setState({
				menuOpen: false
			})
		} else {
			document.body.classList.add('menu-open');
			this.setState({
				menuOpen: true
			})
		}
	}

	render() {

		return (
			<div id="header" className="l-header">
				<div className="l-header__wrap">
					<Link to="/" className="l-header__left">
						<img className="l-header__logo" alt="logo" />
					</Link>
					<div className="l-header__menu-tag"
						onClick={() => this.menuToggle()}>
						<div className="l-header__menu-title">
							MENU
						</div>
						<ul className="buns">
							<li className="bun"></li>
							<li className="bun"></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header