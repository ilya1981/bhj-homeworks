const productCard = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < productCard.length; i++) {
    let placeProductCard = productCard[i].getBoundingClientRect();
    let hints = `<div class="tooltip tooltip_active" style="left:${placeProductCard.x}px">${productCard[i].title}</div>`;

    productCard[i].addEventListener("click", (event) => {
        event.preventDefault();
        if(!event.target.nextElementSibling.classList.contains("tooltip_active")) {
            event.target.insertAdjacentHTML("afterEnd", hints)
        } else {
            event.target.nextElementSibling.remove();
        }
    });
}