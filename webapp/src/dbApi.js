// emulator
const baseURL = 'http://localhost:9000'
const suffix = '?ns=awepets-9175f'
http://localhost:5001/awepets-9175f/us-central1/getPets

// prod
// const baseURL = 'https://awepets-9175f.firebaseio.com/'
// const suffix = ''

function url(path) {
  return `${baseURL}${path}.json${suffix}`
}

function getList(listName){
  return fetch(url('/'+listName))
    .then(res => res.json())
    .then(resMap => Object.keys(resMap).map(id => ({ ...resMap[id], id })))
}

function getById(){

}

export {
  getList,
  getById,
}
