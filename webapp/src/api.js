// emulator
//const baseURL = 'http://localhost:5001/awepets-9175f/us-central1'

// prod
const baseURL = 'https://us-central1-awepets-9175f.cloudfunctions.net'


function url(functionName, suffix='') {
  return `${baseURL}${functionName}${suffix}`
}

function getPets(){
  // eslint-disable-next-line no-undef
  return fetch(url('/listPets'))
    .then(res => res.json())
    .then(resMap => Object.keys(resMap).map(id => ({ ...resMap[id], id })))
}

function showPet(petId){
  // eslint-disable-next-line no-undef
  return fetch(url('/showPet', `?id=${petId}`))
    .then(res => res.json())
}


export {
  getPets,
  showPet,
}
