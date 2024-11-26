document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");
	const buttontotop = document.getElementById("button_top");
	var button_menu = document.getElementById("button_menu");
	var menu = document.getElementById("header_menu");
	var menu_close = document.getElementById("burger_close");
	var menu_open = document.getElementById("burger_open");

	menu.style.display = "none";
	menu_close.style.display = "none";
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

	button_menu.addEventListener("click", () => {
		if (menu.style.display === "none") {
			menu.style.display = "flex";
			menu_close.style.display = "block";
			menu_open.style.display = "none";
		} else {
			menu.style.display = "none";
			menu_close.style.display = "none";
			menu_open.style.display = "block";
		}
	});
});
