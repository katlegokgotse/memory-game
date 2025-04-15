const plays = new Map();
let flippedCards = [];
let matchCount = 0;
let cardPairs = 8; 
let totalFlips = 0;

const mainCards = document.querySelectorAll(".flip-card");

mainCards.forEach(card => {
    card.addEventListener("click", () => {
        const inner = card.querySelector(".flip-card-inner");
        const cardId = inner.getAttribute("data-id");

        if (flippedCards.length === 2 || flippedCards.includes(card)) return;

        inner.style.transform = "rotateY(180deg)";
        flippedCards.push(card);

        if (plays.has(cardId)) {
            plays.set(cardId, plays.get(cardId) + 1);
        } else {
            plays.set(cardId, 1);
        }

        console.log("Click counts:", plays);

        if (flippedCards.length === 2) {
            totalFlips++;
            checkForMatch();
        }
    });
});

function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;

    const firstInner = firstCard.querySelector(".flip-card-inner");
    const secondInner = secondCard.querySelector(".flip-card-inner");

    const firstCardId = firstInner.getAttribute("data-id");
    const secondCardId = secondInner.getAttribute("data-id");

    if (firstCardId === secondCardId) {
        matchCount++;
        flippedCards = [];
        if (matchCount === cardPairs) {
            alert("Congratulations! You've matched all the pairs!");
        }
    } else {
        setTimeout(() => {
            firstInner.style.transform = "rotateY(0deg)";
            secondInner.style.transform = "rotateY(0deg)";
            flippedCards = [];
        }, 1000);
    }
}

let date = document.getElementById("date");
date.innerText = `${new Date().getFullYear()} by Katlego Kgotse`;

const footerLink = "https://katlegokgotse.co.za";
date.setAttribute("href", footerLink); // Send link to portfolio
date.style.cursor = "pointer";
