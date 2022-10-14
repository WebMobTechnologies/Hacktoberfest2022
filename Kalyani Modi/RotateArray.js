const rotateArray = matrix => {
	const M = matrix.length;
	const N = matrix[0].length;

	let destination = new Array(N);
	for (let i = 0; i < N; i++) {
		destination[i] = new Array(M);
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			destination[i][j] = matrix[M - j - 1][i];
		}
	}

	// return the destination matrix
	return destination;
};

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(rotateArray(matrix)); 