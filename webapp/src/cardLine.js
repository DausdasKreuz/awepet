import React from 'react'
import {CardFactory} from './card'

class CardLine extends React.Component {
  constructor(props) {
    super(props)
    // eslint-disable-next-line react/prop-types
    this.cards = this.props.cards
  }
  createLineContent(){
    return this.cards.map(card => {
      return CardFactory.createCard(card)
    })
  }
  render() {
    return (
      <div className="card-line">{this.createLineContent()}</div>
    )
  }
}

class CardLineFactory {
  static createLine(lineConfig){
    return <CardLine cards={lineConfig}/>
  }
}

export {
  CardLine,
  CardLineFactory,
}
