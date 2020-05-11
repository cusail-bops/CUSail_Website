const metrics = Array.from(document.getElementsByClassName('metric'))
const pictures = Array.from(document.getElementsByClassName('pic'))
const eventCards = Array.from(document.getElementsByClassName('event-card'))
const goals = Array.from(document.getElementsByClassName('goal'))

const width = window.innerWidth
const addHidden = (array) => {
  array.forEach((item) => {
    item.classList.add('hidden')
  });
}
const displayItems = (items, start, end, animation) => {
  for (i = start;i < end; i ++){
    items[i].classList.add(animation)
    items[i].classList.remove('hidden')
  }
}

if (width >= 623){
  addHidden(metrics)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 550 && y < 1050){
      displayItems(metrics, 0,1, 'slide-right')
      displayItems(metrics, 1,2, 'zoom-in')
      displayItems(metrics, 2,3, 'slide-left')
    }
})
}

if (width >= 1048){
  addHidden(pictures)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 800 && y < 1400){
      displayItems(pictures, 0,2, 'slide-right')
      displayItems(pictures, 2,4, 'slide-left')
    }
})
}

if (width >= 785 && width <= 1048){
  addHidden(pictures)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 900 && y < 1500){
      displayItems(pictures, 0,1, 'slide-right')
      displayItems(pictures, 1,2, 'zoom-in')
      displayItems(pictures, 2,3, 'slide-left')
    }
    if (y > 1200 && y < 1800){
      displayItems(pictures, 3,4, 'zoom-in')
    }
})
}

if (width >= 526 && width <= 785){
  addHidden(pictures)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    og(y)
    if (y > 900 && y < 1500){
      displayItems(pictures, 0,1, 'slide-right')
      displayItems(pictures, 1,2, 'slide-left')
    }
    if (y > 1200 && y < 1800){
      displayItems(pictures, 2,3, 'slide-right')
      displayItems(pictures, 3,4, 'slide-left')
    }
})
}

if (width >= 1305 && width <= 1738){
  addHidden(eventCards)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 1600 && y < 2100){
      displayItems(eventCards, 0,1, 'slide-right')
      displayItems(eventCards, 1,2, 'zoom-in')
      displayItems(eventCards, 2,3, 'slide-left')
    }
    if (y > 2100 && y < 2600){
      displayItems(eventCards, 3,4, 'slide-right')
      displayItems(eventCards, 4,5, 'slide-left')
    }
})
}

if (width >= 870 && width <= 1304){
  addHidden(eventCards)
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 1700 && y < 2200){
      displayItems(eventCards, 0, 1, 'slide-right')
      displayItems(eventCards, 1, 2, 'slide-left')
    }
    if (y > 2200 && y < 2700){
      displayItems(eventCards, 2,3, 'slide-right')
      displayItems(eventCards, 3,4, 'slide-left')
    }
    if (y > 2700 && y < 3200){
      displayItems(eventCards, 4,5, 'zoom-in')

    }
})
}

// if (width >= 700  && width < 900){
//   addHidden(goals)
//   window.addEventListener('scroll', (event) => {
//     let y = window.scrollY
//     if (y > 3600 && y < 4000){
//       displayItems(goals, 0, 1, 'slide-left')
//     }
//     if (y > 3900 && y < 4300){
//       displayItems(goals, 1, 2, 'slide-left')
//     }
//     if (y > 4200 && y < 4600){
//       displayItems(goals, 2, 3, 'slide-left')
//     }
// })
// }
//
// if (width >= 900  && width <= 1391){
//   addHidden(goals)
//   window.addEventListener('scroll', (event) => {
//     let y = window.scrollY
//     if (y > 2600 && y < 3000){
//       displayItems(goals, 0, 1, 'slide-left')
//     }
//     if (y > 2800 && y < 3300){
//       displayItems(goals, 1, 2, 'slide-left')
//     }
//     if (y > 3100 && y < 3600){
//       displayItems(goals, 2, 3, 'slide-left')
//     }
// })
// }
