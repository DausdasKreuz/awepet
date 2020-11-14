import './styles.scss'
//import React from 'react'
import ReactDOM from 'react-dom'
import {CardFactory} from './card'
import {collection} from './collection'
const pet = collection[0]
const cardConfig = {
  title: pet.name,
  image: pet.photo,
  text: pet.description,
}


ReactDOM.render(
  CardFactory.createCard(cardConfig),
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
ReactDOM.render(
  CardFactory.createCard(cardConfig),
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
