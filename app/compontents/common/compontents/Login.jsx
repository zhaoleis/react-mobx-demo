import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {observer} from 'mobx-react'
import { Button, CellsTitle, Cells, Cell, CellBody, Input,
  TextArea, CellFooter, ActionSheet, Dialog, ButtonArea } from 'react-weui'
import 'weui'
import avatarSrc from '../../../assets/img/avatar.jpg'
import './Login.less'
import $ from 'jquery'

@observer
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirm: false,
      showType: false,
      menus: [
        {
          label: 'AD',
          onClick: this.hideType.bind(this, 'AD')
        }, {
          label: 'Rent',
          onClick: this.hideType.bind(this, 'Rent')
        }, {
          label: 'Sell',
          onClick: this.hideType.bind(this, 'Sell')
        },
      ],
      alert: {
        title: 'my title',
        buttons: [
          {
            label: 'ok',
            onClick: this.onHideAlert.bind(this)
          }
        ]
      },
      demoFiles: [
        {
          url: avatarSrc
        }
      ]
    }
    this.onPublish = this.onPublish.bind(this)
    this.onShowType = this.onShowType.bind(this)
    this.onTitleChange = this.onTextChange.bind(this, 'title')
    this.onContentChange = this.onTextChange.bind(this, 'content')
    this. hideType = this.hideType.bind(this)
  }

  componentWillMount() {
    const {_publish} = this.props
  }

  componentWillReact() {
    const {_publish} = this.props
  }

  componentWillReceiveProps(nextProps) {
    const {_publish} = nextProps
  }

  onPublish() {
    const { _publish } = this.props
    if (_publish.title.length === 0) {
      console.log('title not empty')
      return
    }
    if (_publish.content.length === 0) {
      console.log('content not empty')
      return
    }
    if (_publish.id) {
      _publish.updateInfo(_publish.id)
    } else {
      _publish.addInfo()
    }
    setTimeout(() => {
      browserHistory.push('welcome')
    }, 1000)
  }
  onHideAlert() {
    this.setState({
      showConfirm: false
    })
  }
  onShowType() {
    this.setState({
      showType: true
    })
  }
  onTextChange(key, e) {
    const {_publish} = this.props
    _publish[key] = e.target.value
  }
  hideType(type) {
    if (typeof (type) === 'string') {
      this.props._publish.type = type
      this.setState({
        showType: false
      })
    } else {
      this.setState({
        showType: false
      })
    }
  }

  render() {
    const {_publish} = this.props

    const { Alert } = Dialog

    return (
      <div className="container">
        <h1 className="title">I wan't push</h1>
        <CellsTitle>Type</CellsTitle>
        <Cells access>
          <Cell>
            <CellBody onClick={this.onShowType}>
              {_publish.type ? _publish.type : 'AD'}
            </CellBody>
          </Cell>
        </Cells>
        <CellsTitle>Title</CellsTitle>
        <Cells>
          <Cell>
            <CellBody><Input placeholder="enter title" value={_publish.title} onChange={this.onTitleChange} /></CellBody>
          </Cell>
        </Cells>
        <CellsTitle>Content</CellsTitle>
        <Cells>
          <Cell>
            <CellBody><TextArea row="3" placeholder="enter content" maxlength="200" value={_publish.content} onChange={this.onContentChange} /></CellBody>
          </Cell>
        </Cells>
        <div style={{ margin: '24px 0' }} />
        <ButtonArea>
          <Button onClick={this.onPublish}>Pushing</Button>
        </ButtonArea>
        <ActionSheet menus={this.state.menus} actions={this.state.actions} show={this.state.showType} onRequestClose={this.hideType} />
        <Alert title={this.state.alert.title} buttons={this.state.alert.buttons} show={this.state.showConfirm} />
      </div>
    )
  }
}
