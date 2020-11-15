import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {LinePageFactory} from './linePage'
import {createSelectionPageConfigFromCollection} from './config'
import * as dbApi from './dbApi'
import {CardFactory} from "./card";


class PageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 'selection',
      pets: [],
      selectedId: '',
    }
  }
  componentDidMount() {
    dbApi.getList('pets')
      .then(pets => {
        this.setState({pets: pets})
      })
  }
  render() {
    switch (this.state.pageType) {
    case 'selection':
      return (
        <div className="page-container">
          {LinePageFactory.createPage(createSelectionPageConfigFromCollection(this.state.pets))}
        </div>
      )
    case 'profile':
      return (
        <div className="page-container">
          {CardFactory.createCard(createProfilePageConfigFromCollection(this.state.pets.find(pet => pet.id === this.state.selectedId)))}
        </div>
      )
    }
  }
}

ReactDOM.render(
  <PageContainer />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
