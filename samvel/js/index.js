function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let path = 'images/'

let arrayOfCards = ['karol-qyap.jpeg','tuz-sirt.jpg','dama-xach.jpg','jocker.jpg','ghar-10.jpg','sirt-3.jpg','valet-ghar.jpg','ghar-9.jpg',
                    'karol-qyap.jpeg','tuz-sirt.jpg','dama-xach.jpg','jocker.jpg','ghar-10.jpg','sirt-3.jpg','valet-ghar.jpg','ghar-9.jpg']

// let arrayOfCards = [
//   'https://st.depositphotos.com/2127699/2238/i/450/depositphotos_22389095-stock-photo-playing-card-ace-of-hearts.jpg',
//   'https://st.depositphotos.com/2127699/2238/i/450/depositphotos_22389095-stock-photo-playing-card-ace-of-hearts.jpg',
//
//   'https://i.ebayimg.com/images/g/1LcAAOSwHVFehtRr/s-l500.jpg ',
//   'https://i.ebayimg.com/images/g/1LcAAOSwHVFehtRr/s-l500.jpg ',
//
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8qoCfL6jw_vU_utV2453awTq6R2ZR-rjcZfyCACalq0o1ug-dlqbM6OxuR0KMlQ3_z4&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8qoCfL6jw_vU_utV2453awTq6R2ZR-rjcZfyCACalq0o1ug-dlqbM6OxuR0KMlQ3_z4&usqp=CAU',
//
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYt0pOkqFCgOXK7BqQ_RV0Z8cY7kASMU7j6ol-84G8babUU9lhgpFgZlwfPgZLwaAe18&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYt0pOkqFCgOXK7BqQ_RV0Z8cY7kASMU7j6ol-84G8babUU9lhgpFgZlwfPgZLwaAe18&usqp=CAU',
//
//   'https://i.pinimg.com/736x/d2/31/f8/d231f8432087d62d585188b26edec590.jpg',
//   'https://i.pinimg.com/736x/d2/31/f8/d231f8432087d62d585188b26edec590.jpg',
//
//   'https://i.pinimg.com/originals/ec/10/e8/ec10e8ec3d917946e43d5944aade2ed5.png',
//   'https://i.pinimg.com/originals/ec/10/e8/ec10e8ec3d917946e43d5944aade2ed5.png',
//
//   'https://i.ebayimg.com/images/g/qjwAAOSwBBVehtOj/s-l400.jpg',
//   'https://i.ebayimg.com/images/g/qjwAAOSwBBVehtOj/s-l400.jpg',
//
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmZhKDsbck6tBU7Sp4_XdMlZ-rYdJGAlxG_sOk1BXdwwbBimIT5oPJMaWxPBmguIjzIk&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmZhKDsbck6tBU7Sp4_XdMlZ-rYdJGAlxG_sOk1BXdwwbBimIT5oPJMaWxPBmguIjzIk&usqp=CAU'
// ];

shuffle(arrayOfCards);

let openedCards = []

let cardList = document.getElementById('card-list');

for (let i = 0 ; i < arrayOfCards.length; i++){
  let currentCard = document.createElement('img');
  currentCard.classList.add('card');
  currentCard.onclick = () => showCardValue(currentCard, path + arrayOfCards[i]);
  cardList.append(currentCard)
}

let src = 'https://www.soundjay.com/buttons/sounds/beep-02.mp3'
let audio = new Audio(src)

let src1 = 'https://www.soundjay.com/buttons/sounds/button-09a.mp3'
let audio1 = new Audio(src1)

let limit = 0

function  showCardValue(card, value) {
  limit ++
  if (limit === 7){
    alert("Game over")
    window.location.reload()
  }
  card.src = value
  openedCards.push(value)
  console.log(openedCards)
  if (openedCards.length ===2){
    if (openedCards[0]===openedCards[1]){
      audio1.play()
      openedCards.splice(0,openedCards.length)
    }
    else
        audio.play()
}

}



