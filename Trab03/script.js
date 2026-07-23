document.addEventListener("DOMContentLoaded", function () {
	var form = document.querySelector("form");
	var nome = document.getElementById("nome");
	var email = document.getElementById("email");
	var observacoes = document.getElementById("observacoes");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (nome.value.trim() === "") {
			alert("Preencha o nome.");
			return;
		}

		if (email.value.trim() === "" || email.value.indexOf("@") === -1) {
			alert("Preencha um e-mail válido.");
			return;
		}

		if (observacoes.value.trim().length < 10) {
			alert("Escreva mais detalhes nas observações.");
			return;
		}

		alert("Jogador cadastrado com sucesso!");
		form.reset();
	});
});
