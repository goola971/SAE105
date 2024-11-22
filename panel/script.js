const card_style = document.createElement("style");
card_style.type = "text/css";

card_style.textContent = `
.cards {
	width: 100%;
	height: 55vh;
	background-color: #f9f4ef;
	display: flex;
}

.card {
	flex: 1;
	cursor: pointer;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease-in-out;
}

.card:hover {
	flex: 3;
}

.active_card{
    flex: 100%;
}
/* card 1 sur 2 */
.card:nth-child(2n) {
	background-color: #ff800013;
}

.card:nth-child(2n-1) {
	background-color: #ff00002a;
}

`;

document.head.appendChild(card_style);
