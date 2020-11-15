import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {LinePageFactory} from './linePage'
import {getSelectionPageConfig} from './config'


class PageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pageType: 'selection'}
  }
  render() {
    switch (this.state.pageType) {
    case 'selection':
      return (
        <div className="page-container">{LinePageFactory.createPage(getSelectionPageConfig())}</div>
      )
    }
  }
}

ReactDOM.render(
  <PageContainer />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
)
