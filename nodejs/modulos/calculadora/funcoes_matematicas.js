function soma(a, b) {
	return a + b;
}

function idade(b) {
	return 2025 - b;
}

function multiplica(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		throw new Error('Divisão por zero não é permitida.');
	}
	return a / b;
}

module.exports = {
	soma,
	idade,
	multiplica,
	divide
};
