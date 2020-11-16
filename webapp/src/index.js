import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { LinePageFactory } from './linePage'
import { CardFactory } from './card'
import {
  createSelectionPageConfig,
  createCardConfig,
} from './config'
import * as api from './api'
import * as dbApi from './dbApi'


class PageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'selection',
      pets: [],
      selectedPetId: '',
      pet:{},
    }
  }
  componentDidMount() {
    switch (this.state.type){
    case 'selection':
      api.getPets()
        .then(pets => {
          this.setState({pets: pets})
        })
      break
    case 'profile':
      api.showPet(this.state.selectedPetId)
        .then(pet => {
          this.setState({pet: pet})
        })
      break
    }
  }
  render() {
    switch (this.state.type) {
    case 'selection':
      return (
        <div className="page-container">
          {LinePageFactory.createPage(createSelectionPageConfig(this.state.pets))}
        </div>
      )
    case 'profile':
      return <div className="page-container">
        {CardFactory.createCard(createCardConfig(this.state.pet))}
      </div>
    }
  }
}

ReactDOM.render(
  <PageContainer />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
