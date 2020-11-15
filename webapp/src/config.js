const elementsPerLine =3

function createCardConfigFromProfileData(profile){
  return {
    title: profile.name,
    image: profile.photo,
    text: profile.description,
    likes: profile.likes,
  }
}

function createSimpleCardConfigFromProfileData(profile){
  return {
    title: profile.name,
    image: profile.photo,
    text: '',
  }
}

function createLineConfig(profiles){
  const lineConfig =[]
  for (const profile of profiles){
    lineConfig.push(createSimpleCardConfigFromProfileData(profile))
  }
  return lineConfig
}

function createSelectionPageConfigFromCollection(collection){
  const pageConfig = []
  for (let lineNumber=0; lineNumber<collection.length/elementsPerLine; lineNumber++){
    const lineProfiles = []
    for (let elementNumber=0; elementNumber<elementsPerLine; elementNumber++){
      if (collection[elementNumber+elementsPerLine*lineNumber] !== undefined){
        lineProfiles.push(collection[elementNumber+elementsPerLine*lineNumber])
      }
    }
    pageConfig.push(createLineConfig(lineProfiles))
  }
  return pageConfig
}


export {
  createSelectionPageConfigFromCollection,
}
