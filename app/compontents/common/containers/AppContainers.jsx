import React, { Component } from 'react'
import { autorun } from 'mobx'
import './AppContainers.less'
import Publish from '../../../stores/Publish'

const _publish = new Publish()
autorun(() => {
  if (_publish.addSuccess) {
    _publish.fetchPublishInfo()
  }
})
export default class AppContainers extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-content">
        {React.cloneElement(this.props.children, { _publish }) }
      </div>
    )
  }
}
