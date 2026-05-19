function solucao() {
    let campo = document.getElementById("campo").value;
    let vetor = campo.split("");

    let novoVetor = [];

    for (let i = 0; i < vetor.length; i++) {
        let existe = false;
        if (novoVetor.includes(vetor[i])) {
            existe = true;
        }

        if (existe === false) {
            novoVetor.push(vetor[i]);
        }

        existe = false

    }

    console.log(novoVetor)
    document.getElementById("saida").innerHTML = novoVetor.join(", ");
}