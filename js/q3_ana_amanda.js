function executar(){
    let string = document.getElementById("campo").value;
    //console.log(string)
    let inicio = 0;
    let final = string.length - 1;
    let vetsaida = [];
    for(let i = final; i >= inicio; i--){
        vetsaida.push(string[i]);
        //console.log(string[i])
    }
    //document.getElementById("saida").innerHTML = vetsaida;
    alert(vetsaida);
    //return vetsaida;
}