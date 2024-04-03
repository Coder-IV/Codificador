function resolveEquacao(a, b, x) {
    return a * x + b;
}

function decodificar(resultadoDesejado) {
    for (let a = -6; a <= 6; a++) {
        for (let b = -6; b <= 6; b++) {
            let resultadoAtual = resolveEquacao(a, b, document.getElementById('valorX').value);
            if (resultadoAtual === resultadoDesejado) {
                return { a: a, b: b };
            }
        }
    }
    return null;
}

document.getElementById('iniciar').addEventListener('click', function() {
    let resultadoConhecido = parseInt(document.getElementById('valorConhecido').value);
    let palavra = document.getElementById('palavra').value.toUpperCase();
    let valoresDecodificados = decodificar(resultadoConhecido);
    let resultadoHTML = '';

    if (valoresDecodificados) {
        resultadoHTML += `<p>Para f(${document.getElementById('valorX').value}) = a${document.getElementById('valorX').value} + b = ${resultadoConhecido}, a = ${valoresDecodificados.a} e b = ${valoresDecodificados.b}</p>`
        resultadoHTML += '<p>Valores codificados A-Z:</p>';
        let codificado = "";
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === ' ') {
                resultadoHTML += `<p>${palavra[i]} = Espaço</p>`;
            } else {
                let valorLetra = (valoresDecodificados.a * (palavra.charCodeAt(i) - 65 + 1)) + valoresDecodificados.b;
                resultadoHTML += `<p>${palavra[i]} = ${valorLetra}</p>`;
                codificado += `${valorLetra}-`;
            }
        }
        if (codificado !== "") {
            resultadoHTML += `<p>Criptografado: ${codificado.slice(0, -1)}</p>`;
        }
        resultadoHTML += `<footer>&copy; By Felipe</footer>`
    } else {
        resultadoHTML = `<p>Não foi possível gerar o alfabeto codificado usando engenharia reversa.</p>`;
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
});