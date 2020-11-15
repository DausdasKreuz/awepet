import React from 'react'
import {CardLineFactory} from './cardLine'

class LinePage extends React.Component {
  createPageContent(){
    // eslint-disable-next-line react/prop-types
    return this.props.lines.map(line => {
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
