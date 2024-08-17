function maiorMenor() {
    const a = parseInt(document.getElementById('num1').value)
    const b = parseInt(document.getElementById('num2').value)
    const c = parseInt(document.getElementById('num3').value)
    const d = parseInt(document.getElementById('num4').value)
    const e = parseInt(document.getElementById('num5').value)
    
    const nums = [a, b, c, d, e];
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    document.getElementById('result1').innerText = `Maior: ${max}, Menor: ${min}`;
}

function vogal() {
    const c = document.getElementById('char').value.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const resultado = vogais.includes(c) ? 1 : 0;

    document.getElementById('result2').innerText = `Resultado: ${resultado}`;
}

function limites() {
    const li = parseInt(document.getElementById('limInf').value);
    const ls = parseInt(document.getElementById('limSup').value);

    let pares = [];
    let soma = 0;

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    document.getElementById('result3').innerText = `Pares: ${pares.join(', ')}, Somatório: ${soma}`;
}

function ordem() {
    const a = parseInt(document.getElementById('val1').value);
    const b = parseInt(document.getElementById('val2').value);
    const c = parseInt(document.getElementById('val3').value);

    const sorted = [a, b, c].sort((x, y) => x - y);

    document.getElementById('result4').innerText = `Ordenado: ${sorted.join(', ')}`;
}

function positivoNegativo() {
    const x = parseInt(document.getElementById('val5').value);
    const resultado = x >= 0;

    document.getElementById('result5').innerText = `Positivo: ${resultado}`;
}

function parImpar() {
    const x = parseInt(document.getElementById('val6').value);
    const resultado = x % 2 === 0;

    document.getElementById('result6').innerText = `Par: ${resultado}`;
}
