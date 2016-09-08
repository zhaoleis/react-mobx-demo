import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {observer} from 'mobx-react'
import { Button, ButtonArea, CellsTitle, Cells, Cell, CellBody, CellFooter } from 'react-weui'
import 'weui'
import './Welcome.less'

@observer
export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.click = this.clickMe.bind(this)

  }
  clickMe() {
    const {_publish} = this.props
    _publish.type = 'AD'
    _publish.title = ''
    _publish.content = ''
    _publish.id = null
    browserHistory.push('login')
  }
  updateData(id) {
    const {_publish} = this.props
    _publish.getPublishInfoById(id)
    browserHistory.push('login')
  }

  componentWillMount() {
    const {_publish} = this.props
  }

  render() {
    const {_publish} = this.props
    return (
      <div className="container">
        <section className="jumbotron">
          <div style={{ padding: '24px 0' }} />
          {_publish.addSuccess ? <h3 className="jumbotron-heading">Add Access</h3> : <h3></h3>}
          <div style={{ padding: '24px 0' }} />
          <CellsTitle className="leftbody">List</CellsTitle>
          <Cells access>
            {_publish.publishData.map((item, index) => {
              const updateData = this.updateData.bind(this, item.id)
              return <Cell onClick={updateData}>
                <CellBody className="leftbody">
                  {item.type}
                </CellBody>
                <CellFooter>
                  {item.title}
                </CellFooter>
              </Cell>
            })
            }
          </Cells>
          <ButtonArea>
            <Button onClick={this.click}>To Add</Button>
          </ButtonArea>
        </section>
      </div>
    )
  }
}

