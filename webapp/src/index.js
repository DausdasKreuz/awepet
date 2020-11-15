import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {CardFactory} from './card'
import {collection} from './collection'


function createContent(){
  return collection.map(pet => {
    return CardFactory.createCard({
      title: pet.name,
      image: pet.photo,
      text: pet.description,
    })
  })
}

class PageContainer extends React.Component {
  render() {
    return (
      <div className="page-container">{createContent()}</div>
    )
  }
}

ReactDOM.render(
  <PageContainer />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
