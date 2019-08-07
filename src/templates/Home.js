import React from 'react';
import pages from '../data/pages';
import Footer from '../partials/Footer';

export class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeItem: {},
		}

		this.homeDiv = React.createRef();
		this.scrollHandler = this.scrollHandler.bind(this);
	}

	componentDidMount() {
		this.homeDiv.current.addEventListener('scroll', this.scrollHandler);
		this.homeDiv.current.scrollTop = 0;

		if (pages && pages.length > 0)
			this.setState({
				activeItem: pages[0]
			})
	}


	scrollHandler(e) {
		if (e.currentTarget.scrollTop > 50) {
			document.body.classList.add('scrolled');
			} else {
				document.body.classList.remove('scrolled');
			}
	}

	handleClick(){
		this.homeDiv.current.scrollTop = 0;
	}

	render() {
		const { activeItem } = this.state

		const titleItems = (activeItem && activeItem.content && activeItem.content.title && activeItem.content.title.length > 0) ? (
			activeItem.content.title.map((item, i) => (
				<div className="b-home__title-item" key={i}>
					{item}
				</div>
			))
		) : null;

		const text = activeItem && activeItem.content && activeItem.content.subtitle ? (
			<div className="b-home__subtitle">
				{activeItem.content.subtitle}
			</div>
		) : null;

		return (
			<div className="b-home" ref={this.homeDiv}>
				<div className="b-home__wrapper">
					<div className="b-home__title">
						{titleItems}
					</div>
					<div className="b-home__text-wrap">
						{text}
					</div>
					</div>
					<Footer toTop = {() => this.handleClick()}/>
			</div>
		)
	}
}

export default Home