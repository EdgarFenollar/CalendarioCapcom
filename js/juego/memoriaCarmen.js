document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
      {
        name: 'bellatrix',
        img: '../../img/juego/bellatrix.png'
      },
      {
        name: 'bellatrix',
        img: '../../img/juego/bellatrix.png'
      },
      {
        name: 'dobby',
        img: '../../img/juego/dobby.png'
      },
      {
        name: 'dobby',
        img: '../../img/juego/dobby.png'
      },
      {
        name: 'Dumbeldore',
        img: '../../img/juego/Dumbeldore.png'
      },
      {
        name: 'Dumbeldore',
        img: '../../img/juego/Dumbeldore.png'
      },
      {
        name: 'Hagrid',
        img: '../../img/juego/Hagrid.png'
      },
      {
        name: 'Hagrid',
        img: '../../img/juego/Hagrid.png'
      },
      {
        name: 'Harrypotter',
        img: '../../img/juego/Harrypotter.png'
      },
      {
        name: 'Harrypotter',
        img: '../../img/juego/Harrypotter.png'
      },
      {
        name: 'Hermoine',
        img: '../../img/juego/Hermoine.png'
      },
      {
        name: 'Hermoine',
        img: '../../img/juego/Hermoine.png'
      },
      {
        name: 'Malfoy',
        img: '../../img/juego/Malfoy.png'
      },
      {
        name: 'Malfoy',
        img: '../../img/juego/Malfoy.png'
      },
      {
        name: 'mcgonal',
        img: '../../img/juego/mcgonal.png'
      },
      {
        name: 'mcgonal',
        img: '../../img/juego/mcgonal.png'
      },
      {
        name: 'Ronald',
        img: '../../img/juego/Ronald.png'
      },
      {
        name: 'Ronald',
        img: '../../img/juego/Ronald.png'
      },
      {
        name: 'Voldermort',
        img: '../../img/juego/Voldermort.png'
      },
      {
        name: 'Voldermort',
        img: '../../img/juego/Voldermort.png'
      },
      {
        name: 'Snape',
        img: '../../img/juego/Snape.png'
      },
      {
        name: 'Snape',
        img: '../../img/juego/Snape.png'
      },
      {
        name: 'Sorting hat',
        img: '../../img/juego/Sorting hat.png'
      },
      {
        name: 'Sorting hat',
        img: '../../img/juego/Sorting hat.png'
      }

    ]

    cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', '../../img/juego/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '../../img/juego/blank.png')
      cards[optionTwoId].setAttribute('src', '../../img/juego/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      
      cards[optionOneId].setAttribute('src', '../../img/juego/white.png')
      cards[optionTwoId].setAttribute('src', '../../img/juego/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '../../img/juego/blank.png')
      cards[optionTwoId].setAttribute('src', '../../img/juego/blank.png')
      
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Genial!! Has completado el juego.'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})