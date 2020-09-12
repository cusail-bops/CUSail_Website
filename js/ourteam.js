const flipCards = Array.from(document.getElementsByClassName('member-card'))
const width = window.innerWidth
const addHidden = () => {
  flipCards.forEach((card, i) => {
    card.classList.add('hidden')
  });
}
const displayCards = (start, end) => {
  for (i = start;i < end; i ++){
    flipCards[i].classList.add('zoom-in')
    flipCards[i].classList.remove('hidden')
  }
}
if (width >= 1333  && width <= 1600){
  addHidden()
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 400 && y < 1000){displayCards(0, 4)}
    if (y > 1000 && y < 1600){displayCards(4, 8)}
    if (y > 1400 && y < 2000){displayCards(8, 12)}
    if (y > 1800 && y < 2400){displayCards(12, 16)}
    if (y > 2200 && y < 2800){displayCards(16, 17)}
    if (y > 3200 && y < 3800){displayCards(17, 21)}
    if (y > 3600 && y < 4200){displayCards(21, 23)}
    if (y > 4400 && y < 5000){displayCards(23, 27)}
    if (y > 4800 && y < 5400){displayCards(27, 29)}
  })
}

if (width <= 1332  && width >= 1015){
  addHidden()
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 500 && y < 1100){displayCards(0, 3)}
    if (y > 900 && y < 1500){displayCards(3, 4)}
    if (y > 1600 && y < 2200){displayCards(4, 7)}
    if (y > 2100 && y < 2700){displayCards(7, 10)}
    if (y > 2500 && y < 3100){displayCards(10, 13)}
    if (y > 2900 && y < 3500){displayCards(13, 16)}
    if (y > 3300 && y < 3900){displayCards(16, 17)}
    if (y > 4100 && y < 4700){displayCards(17, 20)}
    if (y > 4600 && y < 5200){displayCards(20, 23)}
    if (y > 5000 && y < 5600){displayCards(23, 26)}
    if (y > 5400 && y < 6000){displayCards(26, 29)}
  })
}

if (width <= 1014  && width >= 698){
  addHidden()
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 500 && y < 1200){displayCards(0, 2)}
    if (y > 900 && y < 1600){displayCards(2, 4)}
    if (y > 1600 && y < 2300){displayCards(4, 6)}
    if (y > 2100 && y < 2800){displayCards(6, 8)}
    if (y > 2500 && y < 3200){displayCards(8, 10)}
    if (y > 2900 && y < 3600){displayCards(10, 12)}
    if (y > 3300 && y < 4000){displayCards(12, 14)}
    if (y > 3700 && y < 4400){displayCards(14, 16)}
    if (y > 4100 && y < 4800){displayCards(16, 17)}
    if (y > 4800 && y < 5400){displayCards(17, 19)}
    if (y > 5200 && y < 5800){displayCards(19, 21)}
    if (y > 5600 && y < 6200){displayCards(21, 23)}
    if (y > 6500 && y < 7100){displayCards(23, 25)}
    if (y > 6900 && y < 7500){displayCards(25, 27)}
    if (y > 7300 && y < 7900){displayCards(27, 29)}
  })
}
