function getMatrixA() {
    return [
        [parseFloat(document.getElementById('a11').value), parseFloat(document.getElementById('a12').value)],
        [parseFloat(document.getElementById('a21').value), parseFloat(document.getElementById('a22').value)]
    ];
}

function getMatrixB() {
    return [
        [parseFloat(document.getElementById('b11').value), parseFloat(document.getElementById('b12').value)],
        [parseFloat(document.getElementById('b21').value), parseFloat(document.getElementById('b22').value)]
    ];
}

function addMatrices() {
    const A = getMatrixA();
    const B = getMatrixB();
    const result = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ];
    displayResult(result);
}

function subtractMatrices() {
    const A = getMatrixA();
    const B = getMatrixB();
    const result = [
        [A[0][0] - B[0][0], A[0][1] - B[0][1]],
        [A[1][0] - B[1][0], A[1][1] - B[1][1]]
    ];
    displayResult(result);
}

function multiplyMatrices() {
    const A = getMatrixA();
    const B = getMatrixB();
    const result = [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1]
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1]
        ]
    ];
    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        [ ${result[0][0]} , ${result[0][1]} ]<br>
        [ ${result[1][0]} , ${result[1][1]} ]
    `;
}