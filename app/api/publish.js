const publishDB = [
  { type: 'AD', title: 'Sell House', content: 'big house ,cheap ,good', id: 1 },
  { type: 'Rent', title: 'Rent Car', content: 'big car ,cheap ,good', id: 2 },
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

