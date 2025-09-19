export function soma(a, b, c) {
	return a + b + c;
}

export function idade(b) {
	return 2025 - b;
}

export function diminui(a, b) {
	return a - b;
}

export function multiplica(a, b) {
	return a * b;
}

export function divide(a, b) {
	if (b === 0) {
		throw new Error('Divisão por zero não é permitida.');
	}
	return a / b;
}