function executar(){

    let vet = [];

    let n = parseInt(document.querySelector("#campo").value);

    for(i=0; i<=n; i++){
        vet.push(i+1)

        if(vet[i] % 3 === 0 && vet[i] % 5 === 0){
            vet[i] = "FizzBuzz"
        }
        
        if(vet[i] % 3 === 0){
            vet[i] = "Fizz"
        }

        if(vet[i] % 5 === 0){
            vet[i] = "Buzz"
        }

        if(vet[i] % 7 === 0){
            vet[i] = "Boom"
        }
    }
    document.getElementById("saida").innerHTML = vet;
    alert(vet);
}

