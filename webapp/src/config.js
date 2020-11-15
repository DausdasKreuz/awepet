const elementsPerLine =3

function createCardConfig(profile){
  return {
    title: profile.name,
    image: profile.photo,
    text: profile.description,
  }
}

function createSimpleCardConfig(profile){
  return {
    title: profile.name,
    image: profile.photo,
    text: '',
  }
}

function createLineConfig(profiles){
  const lineConfig =[]
  for (const profile of profiles){
    lineConfig.push(createSimpleCardConfig(profile))
  }
  return lineConfig
}

function createSelectionPageConfig(collection){
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
  createSelectionPageConfig,
  createLineConfig,
  createCardConfig,
  createSimpleCardConfig,
}
