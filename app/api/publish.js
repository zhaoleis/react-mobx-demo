const publishDB = [
  { type: '广告', title: '卖木耳', content: '新鲜的木耳联系我，13222211111', id: 1 },
  { type: '出租', title: '2室1厅出租', content: '1号楼两室一厅出租，年付可优惠', id: 2 },
]

export function addPublish(type, title, content) {
  return new Promise((res) => {
    const info = { type, title, content, id: publishDB.length + 1 }
    publishDB.push(info)
    res({ success: true });
  });
}
export function updatePublish(id, type, title, content) {
  return new Promise((res) => {
    publishDB[id - 1].type = type
    publishDB[id - 1].title = title
    publishDB[id - 1].content = content
    res({ success: true });
  });
}

export function fetchPublishInfo() {
  return new Promise((res) => {
    res({ data: publishDB })
  });
}

export function getPublishInfoById(publishId) {
  return new Promise((res) => {
    res({ data: publishDB.filter(item => item.id === publishId) })
  });
}

