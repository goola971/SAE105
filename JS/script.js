document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");
	const buttontotop = document.getElementById("button_top");
	var button_menu = document.getElementById("button_menu");
	var menu = document.getElementById("header_menu");
	var menu_close = document.getElementById("burger_close");
	var menu_open = document.getElementById("burger_open");
	var search = document.getElementById("search");
	var button_search = document.getElementById("button_search");
	var input_search = document.getElementById("input_search");
	menu.style.display = "none";
	menu_close.style.display = "none";
	input_search.style.display = "none";
	search.style.backgroundColor = "transparent";
	button_search.style.filter = "invert(0)";
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
			behavior: "smooth"
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
	button_search.addEventListener("click", () => {
		if (input_search.style.display === "none") {
			openSearch();
		} else {
			search_input();
		}
		// detecter si click entrer
		input_search.addEventListener("keydown", (e) => {
			if (e.key === "Enter" && input_search.value !== "") {
				search_input();
			}
		});
	});

	function openSearch() {
		input_search.style.display = "block";
		search.style.backgroundColor = "white";
		button_search.style.filter = "invert(1)";
		setTimeout(() => {
			input_search.style.width = "20vw";
		}, 70);
	}

	function closeSearch() {
		input_search.style.width = "0";
		setTimeout(() => {
			input_search.style.display = "none";
			search.style.backgroundColor = "transparent";
			button_search.style.filter = "invert(0)";
			input_search.value = "";
		}, 300);
	}

	function search_input() {
		const query = document
			.getElementById("input_search")
			.value.toLowerCase();
		const cards = document.querySelectorAll(".card");
		let resultsFound = false;

		cards.forEach((card) => {
			const title = card.querySelector("h2").textContent.toLowerCase();
			const desc = card.querySelector("p").textContent.toLowerCase();
			if (title.includes(query) || desc.includes(query)) {
				card.style.display = "flex";
				resultsFound = true;
			} else {
				card.style.display = "none";
			}
		});
		if (resultsFound === false) {
			alert("Aucun résultat trouvé pour : " + query);
			window.location.href = "index.html";
		} else {
			closeSearch();
		}
	}
});
