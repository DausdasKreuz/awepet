// This file provide an API to work directly with the database.

// emulator
//const baseURL = 'http://localhost:9000'
//const suffix = '?ns=awepets-9175f'

// prod
const baseURL = 'https://awepets-9175f.firebaseio.com/'
const suffix = ''

function url(path) {
  return `${baseURL}${path}.json${suffix}`
}

function getList(listName){
  // eslint-disable-next-line no-undef
  return fetch(url('/'+listName))
    .then(res => res.json())
    .then(resMap => Object.keys(resMap).map(id => ({ ...resMap[id], id })))
}


export {
  getList,
}
