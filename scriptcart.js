// Calcular dias restantes até a data da vacina
function calcularDiasRestantes(data) {
	const ONE_DAY = 1000 * 60 * 60 * 24;
	const dataVacina = new Date(data);
	const hoje = new Date();
	console.log('Data da vacina:', dataVacina);
    console.log('Data atual:', hoje);
	const diff = Math.ceil((dataVacina - hoje) / ONE_DAY);
	console.log('Dias restantes:', diff);
	return diff;
}

// Atualizar os contadores de dias restantes
function atualizarDiasRestantes() {
	const dose1 = document.getElementById("dose1");
	const dose2 = document.getElementById("dose2");
	const dose3 = document.getElementById("dose3");

	const diasRestantesDose1 = calcularDiasRestantes("06/06/2023");
	const diasRestantesDose2 = calcularDiasRestantes("06/27/2023");
	const diasRestantesDose3 = calcularDiasRestantes("07/27/2023");

	dose1.textContent = diasRestantesDose1;
	dose2.textContent = diasRestantesDose2;
	dose3.textContent = diasRestantesDose3;
}

// Chamar a função de atualizar os contadores de dias restantes quando a página carregar
window.onload = function() {
	atualizarDiasRestantes();
};