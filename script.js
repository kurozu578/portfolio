
// スクロール表示
const cards = document.querySelectorAll(".card");

const showOnScroll = () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
        card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// スムーズスクロール
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({
        behavior: "smooth"
        });
    });
});

