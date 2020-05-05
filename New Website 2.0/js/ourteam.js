const flipCards = Array.from(document.getElementsByClassName('member-card'))
if (window.innerWidth >= 1333  && window.innerWidth <= 1600){
  flipCards.forEach((card, i) => {
    card.classList.add('hidden')
  });

  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 700 && y < 1300){
        for (i = 0;i < 4; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 1400 && y < 2000){
        for (i = 4;i < 8; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 1800 && y < 2400){
        for (i = 8;i < 12; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2200 && y < 2800){
        for (i = 12;i < 16; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }

    if (y > 2600 && y < 3200){
        for (i = 16;i < 17; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }

    if (y > 3400 && y < 4000){
        for (i = 17;i < 21; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 3800 && y < 4400){
        for (i = 21;i < 25; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 4200 && y < 4800){
        for (i = 25;i < 27; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5000 && y < 5600){
        for (i = 27;i < 31; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5400 && y < 6000){
        for (i = 31;i < 34; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
  })

}

if (window.innerWidth <= 1332  && window.innerWidth >= 1015){
  flipCards.forEach((card, i) => {
    card.classList.add('hidden')
  });

  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 500 && y < 1100){
        for (i = 0;i < 3; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 900 && y < 1500){
        for (i = 3;i < 4; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 1700 && y < 2300){
        for (i = 4;i < 7; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2100 && y < 2700){
        for (i = 7;i < 10; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2500 && y < 3100){
        for (i = 10;i < 13; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2900 && y < 3500){
        for (i = 13;i < 16; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 3300 && y < 3900){
        for (i = 16;i < 17; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 4200 && y < 4800){
        for (i = 17;i < 20; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 4600 && y < 5200){
        for (i = 20;i < 23; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5000 && y < 5600){
        for (i = 23;i < 26; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5400 && y < 6000){
        for (i = 26;i < 27; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 6200 && y < 6800){
        for (i = 27;i < 30; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 6600 && y < 7200){
        for (i = 30;i < 33; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 7000 && y < 7600){
        for (i = 33;i < 34; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }

  })

}

if (window.innerWidth <= 1014  && window.innerWidth >= 698){
  flipCards.forEach((card, i) => {
    card.classList.add('hidden')
  });

  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    console.log(y)
    if (y > 500 && y < 1200){
        for (i = 0;i < 2; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 900 && y < 1600){
        for (i = 2;i < 4; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 1700 && y < 2400){
        for (i = 4;i < 6; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2100 && y < 2800){
        for (i = 6;i < 8; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2500 && y < 3200){
        for (i = 8;i < 10; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 2900 && y < 3600){
        for (i = 10;i < 12; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 3300 && y < 4000){
        for (i = 12;i < 14; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 3700 && y < 4400){
        for (i = 14;i < 16; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 4100 && y < 4800){
        for (i = 16;i < 17; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5100 && y < 5800){
        for (i = 17;i < 19; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5500 && y < 6200){
        for (i = 19;i < 21; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 5900 && y < 6600){
        for (i = 21;i < 23; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 6300 && y < 7000){
        for (i = 23;i < 25; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 6700 && y < 7400){
        for (i = 25;i < 27; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 7700 && y < 8400){
        for (i = 27;i < 29; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 8100 && y < 8800){
        for (i = 29;i < 31; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 8500 && y < 9200){
        for (i = 31;i < 33; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
    if (y > 8900 && y < 9600){
        for (i = 33;i < 34; i ++){
          flipCards[i].classList.add('zoom-in')
          flipCards[i].classList.remove('hidden')
        }
    }
  })

}
