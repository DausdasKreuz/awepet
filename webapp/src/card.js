/* eslint-disable react/prop-types */
import React from 'react'


class CardHeader extends React.Component {
  render() {
    const { image } = this.props
    const style = {
      backgroundImage: 'url(' + image + ')',
    }
    return (
      <header style={style} id={image} className="card-header">
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> More
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image}/>
        <CardBody title={this.props.title} text={this.props.text}/>
      </article>
    )
  }
}

class CardFactory {
  static createCard(cardConfig){
    return <Card image={cardConfig.image} title={cardConfig.title} text={cardConfig.text}></Card>
  }
}

export {
  Card,
  CardFactory,
}
