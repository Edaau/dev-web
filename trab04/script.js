const linhas = document.querySelectorAll("table.reportTable tbody tr");
const disciplinas = [];

linhas.forEach((linha) => {
	const link = linha.querySelector('a[onclick*="consultarDisciplina"]');
	const texto = linha.querySelector("span");

	if (!link || !texto) return;

	const codigo = link.getAttribute("onclick").match(/consultarDisciplina\(output,\s*(\d+)\)/);

	if (codigo) {
		disciplinas.push({
			codigo: Number(codigo[1]),
			disciplina: texto.textContent.trim()
		});
	}
});

window.disciplinas = disciplinas;

const tabela = document.getElementById("lista-disciplinas");

if (tabela) {
	tabela.innerHTML = disciplinas.map((disciplina) => `
		<tr>
			<td>${disciplina.codigo}</td>
			<td>${disciplina.disciplina}</td>
		</tr>
	`).join("");
}
