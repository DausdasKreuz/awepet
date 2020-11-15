const collection = [
  {
    'name': 'Pet1',
    'photo': 'https://t1.ea.ltmcdn.com/es/images/8/5/8/cantidad_de_comida_diaria_para_un_gran_danes_22858_600.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacinia felis, non consectetur ipsum luctus vitae. Etiam commodo, felis sit amet consectetur sodales, elit magna venenatis tortor, id auctor libero massa at lectus. Phasellus at quam vel lorem varius ultricies ac sed lectus. Nullam rutrum ultrices risus sit amet laoreet. Suspendisse vitae sapien interdum, aliquet turpis nec, lacinia diam.',
  },
  {
    'name': 'Pet2',
    'photo': 'https://www.bewi-dog.de/sites/default/files/dog-image1_6.png',
    'description': 'Sed fringilla malesuada eros et interdum. Phasellus ultricies eu elit id sagittis. Vivamus at turpis iaculis est dignissim malesuada vitae quis urna. Donec ut ultrices nulla. Duis eget congue dui, rutrum laoreet urna. Donec tempor vulputate pretium. Maecenas aliquam vehicula posuere. Fusce imperdiet malesuada molestie. Nullam placerat accumsan arcu, sed sollicitudin ligula pharetra a.',
  },
  {
    'name': 'Pet3',
    'photo': 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
    'description': 'Nulla eu maximus est. Nam suscipit quam sit amet lacus pulvinar, nec facilisis odio egestas. In tincidunt et ex vitae pellentesque. Ut rhoncus commodo mattis. Maecenas finibus auctor interdum. Integer risus tortor, scelerisque ac rutrum id, porttitor in mauris. Fusce et arcu nec lacus fermentum pretium et at nibh. Proin dignissim, mauris ut iaculis ornare, tortor odio lobortis neque, vel semper ipsum felis non felis.',
  },
  {
    'name': 'Pet4',
    'photo': 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1140&quality=85&auto=format&fit=max&s=4f6713e438e0b7ee061aa45bedfdf3e8',
    'description': 'Ut dictum lorem vehicula, mollis velit tincidunt, elementum tellus. Pellentesque pellentesque, ligula non blandit feugiat, orci lectus placerat diam, eu rhoncus purus enim quis massa. Duis condimentum condimentum lectus nec suscipit. Duis ac urna non velit fermentum efficitur. Phasellus ac urna eget odio vestibulum tempus auctor ut massa.',
  },
  {
    'name': 'Pet5',
    'photo': 'https://media.istockphoto.com/photos/closeup-portrait-of-chukchi-husky-breed-dog-on-winter-backgroun-picture-id187994778',
    'description': 'Sed maximus risus vel lacinia auctor. Curabitur purus mauris, consectetur vel feugiat id, commodo quis tortor. Ut vel lectus ornare nulla convallis mollis sed imperdiet ex. Nullam eleifend augue vel ipsum consequat, aliquet luctus magna ornare. Vestibulum orci erat, interdum sed justo at, consectetur porttitor massa.',
  },
]

const elementsPerLine =3

function createCardConfigFromProfileData(profile){
  return {
    title: profile.name,
    image: profile.photo,
    text: profile.description,
  }
}

function createLineConfig(profiles){
  const lineConfig =[]
  for (const profile of profiles){
    lineConfig.push(createCardConfigFromProfileData(profile))
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

function getSelectionPageConfig(){
  return createSelectionPageConfigFromCollection(collection)
}

export {
  getSelectionPageConfig,
}
