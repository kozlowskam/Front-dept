import React from 'react';
import Intro from '../components/Intro';
import Card from '../components/Card';
import CardSmall from '../components/CardSmall';
import Quote from '../components/Quote';
import Brands from '../components/Brands';
import Form from '../components/Form';

export class Overwiev extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: {},
      cases: [],
      clients: {}
    }
    this.overwievDiv = React.createRef();
  }

  componentDidMount() {

    if (this.props.item) {
      this.setState({
        activeItem: this.props.item,
        cases: this.props.item.content.cases,
        clients: this.props.item.content.clients
      });
    }
  }

  groupArr(arr, n) {
    let group = [];

    for (let i = 0, j = 0; i < arr.length; i++) {
      if (i >= n && i % n === 0)
        j++;
      group[j] = group[j] || [];
      group[j].push(arr[i])
    }

    return group;
  }

  getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  render() {
    const { activeItem, cases, clients } = this.state
    let casesBefore;
    let casesAfter;
    let randomCase;

    if (cases && cases.length > 0) {

      let withImg = cases.filter((item) => (
        item.image
      ))

      randomCase = withImg[this.getRandomIndex(withImg.length - 1)]

      withImg.map((item) => item.type = "img")
      let groupImg = this.groupArr(withImg, 5)

      let withoutImg = cases.filter((item) => (
        !item.image
      ))

      let groupnoImg = this.groupArr(withoutImg, 2)

      let newArr = groupImg.map((group, i) => {
        if (groupnoImg[i]) {
          let merged = [{
            type: "noimg",
            cases: groupnoImg[i]
          }]
          merged.type = "noimg"
          return group.concat(merged)
        } else {
          return group
        }
      })

      let casesArr = [].concat.apply([], newArr);

      casesBefore = (casesArr && casesArr.length > 0) ? (
        casesArr.slice(0, 10).map((item, i) => {
          switch (item.type) {
            case 'img':
              return <Card item={item} />
            case 'noimg':
              return <CardSmall item={item} />
            default:
              return null;
          }
        })
      ) : null

      casesAfter = (
        casesArr.slice(10, casesArr.length).map((item, i) => {
          switch (item.type) {
            case 'img':
              return <Card item={item} key={i} />
            case 'noimg':
              return <CardSmall item={item} key={i} />
            default:
              return null;
          }
        })
      )
    };

    const header = randomCase ? (
      <Intro item={randomCase} />
    ) : null

    const quote = activeItem.quote ? (
      <Quote item={activeItem.quote} />
    ) : null

    const clientsWrap = (clients && clients.brands && clients.brands.length > 0) ? (
      <Brands clients={clients} />
    ) : null

    return (
      <div className="b-overview">
        {header}
        <div className="b-overview__wrapper">
          {casesBefore}
          {quote}
          {casesAfter}
        </div>
        {clientsWrap}
        <Form />
      </div>
    )
  }
}

export default Overwiev;