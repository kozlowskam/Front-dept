import React from 'react';
import Overwiev from '../templates/Overview';
import Home from '../templates/Home';
import pages from '../data/pages';

export class Template extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeItem: {}
		}
	}

	componentDidMount() {

		if (this.props.match.params.slug) {

			let pageObj;
			if (pages.length > 0) {
				pageObj = pages.find(obj => obj.title === this.props.match.params.slug);

				if (pageObj) {
					this.setState({
						activeItem: pageObj
					})
				}
			}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.state !== prevProps.location.state) {

			let pageObj;
			if (pages.length > 0) {
				pageObj = pages.find(obj => obj.id === this.props.location.state);

				if (pageObj) {
					this.setState({
						activeItem: pageObj
					})
				}
			}
		}
	}



	render() {
		const { activeItem } = this.state

		switch (activeItem.template) {
			case 'home':
				return <Home item={activeItem} />
			case 'work':
				return <Overwiev item={activeItem} />
			default:
				return null
		}

	}
}

export default Template;