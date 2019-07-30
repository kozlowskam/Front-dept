import React from 'react';
import pages from '../data/pages';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: {},
    }
  }

  componentDidMount() {

    if (pages && pages.length > 0)
      this.setState({
        activeItem: pages[0]
      })
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
      <div className="b-home">
        <div className="b-home__title">
          {titleItems}
        </div>
        <div className="b-home__wrapper">
          {text}
        </div>
      </div>
    )
  }
}

export default Home