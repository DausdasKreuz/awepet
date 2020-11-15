// emulator
const baseURL = 'http://localhost:5001/awepets-9175f/us-central1/'

// prod
// const baseURL = 'https://awepets-9175f.firebaseio.com/'

function url(functionName) {
  return `${baseURL}${functionName}`
}

function getPets(){
  return fetch(url('getPets'))
    .then(res => res.json())
    .then(resMap => Object.keys(resMap).map(id => ({ ...resMap[id], id })))
}


