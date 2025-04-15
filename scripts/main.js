let flippedCards = new Map();
let matchCount = 0;
let cardPairs = 8;
let totalFlips = 0;

const mainCards = document.querySelectorAll(".flip-card");

mainCards.forEach(card => {
    card.addEventListener("click", () => {
        const inner = card.querySelector(".flip-card-inner");
        const cardId = inner.getAttribute("data-id");

        if (flippedCards.size === 2 || flippedCards.has(cardId)) return;

        inner.style.transform = "rotateY(180deg)";
        flippedCards.set(cardId, card);  
        if (flippedCards.size === 2) {
            totalFlips++;
            isCardMatched();
        }
    });
});

function isCardMatched() {
  
    const [firstCardId, firstCard] = [...flippedCards.entries()][0];
    const [secondCardId, secondCard] = [...flippedCards.entries()][1];

    const firstInner = firstCard.querySelector(".flip-card-inner");
    const secondInner = secondCard.querySelector(".flip-card-inner");

    if (firstCardId === secondCardId) {
        matchCount++;
        flippedCards.clear(); 
        if (matchCount === cardPairs) {
            alert("Congratulations! You've matched all the pairs!");
        }
    } else {
       
        setTimeout(() => {
            firstInner.style.transform = "rotateY(0deg)";
            secondInner.style.transform = "rotateY(0deg)";
            flippedCards.clear();
        }, 1000);
    }
}

let date = document.getElementById("date");
date.innerText = `${new Date().getFullYear()} by Katlego Kgotse`;

const footerLink = "https://katlegokgotse.co.za";
date.setAttribute("href", footerLink); 
date.style.cursor = "pointer";