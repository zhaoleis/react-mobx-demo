import { observable, computed, autorun, action } from 'mobx'
import superagent from 'superagent'
import * as api from '../api/publish'
export default class Publish {
  @observable publishData = []
  @observable type = ''
  @observable title = ''
  @observable content = ''
  @observable id = null
  @observable addSuccess = true
  addInfo() {
    return api.addPublish(this.type, this.title, this.content, this.publishData.length + 1)
      .then(response => {
        if (response.success) {
          this.addSuccess = true
        }
        return this.addSuccess
      })
  }
  updateInfo(id) {
    return api.updatePublish(id, this.type, this.title, this.content)
      .then(response => {
        if (response.success) {
          this.addSuccess = true
        }
        return this.addSuccess
      })
  }
  fetchPublishInfo() {
    return api.fetchPublishInfo()
      .then(response => {
        if (response) {
          this.publishData = response.data
          this.addSuccess = false
        }
      })
  }
  getPublishInfoById(id) {
    return api.getPublishInfoById(id)
      .then(response => {
        if (response) {
          this.type = response.data[0].type
          this.title = response.data[0].title
          this.content = response.data[0].content
          this.id = response.data[0].id
          this.addSuccess = false
        }
      })
  }
  // @action getCountries() {
  //   superagent.get('http://localhost:9090/countries').end(
  //     action("getCountries-callback", (error, results) => {
  //       console.log(results)
  //     })
  //   );
  // }
}
