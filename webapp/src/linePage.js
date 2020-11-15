import React from 'react'
import {CardLineFactory} from './cardLine'

class LinePage extends React.Component {
  constructor(props) {
    super(props)
    // eslint-disable-next-line react/prop-types
    this.lines = this.props.lines
  }
  createPageContent(){
    return this.lines.map(line => {
      return CardLineFactory.createLine(line)
    })
  }
  render() {
    return (
      <div className="line-page">{this.createPageContent()}</div>
    )
  }
}

class LinePageFactory {
  static createPage(pageConfig){
    return <LinePage lines={pageConfig}/>
  }
}

export {
  LinePage,
  LinePageFactory,
}
