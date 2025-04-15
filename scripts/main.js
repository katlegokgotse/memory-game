const plays = new Map();
const mainCards = document.querySelectorAll(".flip-card");

mainCards.forEach(card => {
    card.addEventListener("click", () => {
        const inner = card.querySelector(".flip-card-inner");
        const cardId = inner.getAttribute("data-id");
        console.log("Clicked card ID:", cardId);

        // Optional: Store click in map
        if (plays.has(cardId)) {
            plays.set(cardId, plays.get(cardId) + 1);
        } else {
            plays.set(cardId, 1);
        }

        console.log("Click counts:", plays);
    });
}
);