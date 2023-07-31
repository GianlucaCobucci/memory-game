const cardArray = [
    { name: 'fries', img: "images/fries.png" },
    { name: 'cheeseburger', img: "images/cheeseburger.png" },
    { name: 'hotdog', img: "images/hotdog.png" },
    { name: 'pizza', img: "images/pizza.png" },
    { name: 'milkshake', img: "images/milkshake.png" },
    { name: 'ice-cream', img: "images/ice-cream.png" },
    { name: 'fries', img: "images/fries.png" },
    { name: 'cheeseburger', img: "images/cheeseburger.png" },
    { name: 'hotdog', img: "images/hotdog.png" },
    { name: 'pizza', img: "images/pizza.png" },
    { name: 'milkshake', img: "images/milkshake.png" },
    { name: 'ice-cream', img: "images/ice-cream.png" },
];

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const checkMatch = () => {
    const cards = document.querySelectorAll("img");
    const [index1, index2] = cardsChosenIds.map(id => parseInt(id, 10));

    if (cardsChosen[0] === cardsChosen[1]) {
        if (index1 === index2) {
            cards[index1].setAttribute('src', 'images/blank.png');
            cards[index2].setAttribute('src', 'images/blank.png');
            alert("You clicked the same image twice");
        } else {
            cardsChosenIds.forEach(id => {
                cards[id].setAttribute('src', 'images/white.png');
                cards[id].removeEventListener('click', flipCard);
            });
            alert("Match found");
            cardsWon.push(cardsChosen);
        }
    } else {
        cardsChosenIds.forEach(id => cards[id].setAttribute('src', 'images/blank.png'));
        alert("Sorry, try again");
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = "Congratulations, you found them all";
    }
}

const flipCard = (event) => {
    const cardId = event.target.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    event.target.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

const createBoard = () => {
    const cardContainer = document.querySelector("#grid");
    for (let i = 0; i < cardArray.length * 3; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('style', 'margin: 1px');
        card.addEventListener('click', flipCard);
        cardContainer.appendChild(card);
    }
}

createBoard();
