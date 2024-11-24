document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");
	const buttontotop = document.getElementById("button_top");
	cards.forEach((card) => {
		const desc = card.querySelector(".desc");
		const descp = desc.querySelector("p");

		card.addEventListener("mouseover", () => {
			desc.classList.add("active");
		});

		card.addEventListener("mouseout", () => {
			desc.classList.remove("active");
		});
	});

	buttontotop.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
