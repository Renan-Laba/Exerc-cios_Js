function ex_1(){
    var n1 = window.prompt("Digite o primeiro número: ");
    var n2 = window.prompt("Digite o segundo número: ");
    
    if(n1 > n2){
        document.getElementById("p").innerHTML  = `${n2} ${n1}`
    }else{
        document.getElementById("p").innerHTML  = `${n1} ${n2}`
    }
}

function ex_2(){
    var altura = window.prompt("Digite a altura: ")
    var genero; 
    
    do {
        genero = window.prompt("Digite o genero(M/F) ")

    } while (genero.toUpperCase() !="M" && genero.toUpperCase() != "F");

    if(genero.toUpperCase() == "M"){
        document.getElementById("p").innerHTML = `Peso ideal: ${72.7 * parseFloat(altura) - 58}`
    }else if(genero.toUpperCase() == "F"){
        document.getElementById("p").innerHTML = `Peso ideal: ${62.1 * parseFloat(altura) - 44.7}`
    }
}
    

function ex_3(){
    var n1 = Number(window.prompt("Digite o Primeiro numero"))
    var n2 = window.prompt("Digite o Segundo numero")
    var n3 = window.prompt("Digite o Terceiro numero")
    var menor = n1

    if(menor > n2){
        menor = n2;
    }
    if(menor > n3){
        menor = n3;
    }

    document.getElementById("p").innerHTML = `O menor número é: ${menor}`;
}

function ex_4(){
    var n = window.prompt("Digite um número")

    if(n > 0 ){
        if(n %2==0){
            document.getElementById("p").innerHTML = `Esse número é par`
        }else{
            document.getElementById("p").innerHTML = `Esse número é ímpar`
        }
    }else{
        n = n * - 1;
        document.getElementById("p").innerHTML = `O número absoluto é ${n}`
    }
}

function ex_5(){
    var n = window.prompt("Informe um numero");

    if (n %2==0){
        if(n %3==0){
            document.getElementById("res").innerHTML = "O número é divisivel por 2 e por 3"
        }else{
            document.getElementById("res").innerHTML = "O número é divisivel por 2"
        }
    }else if(n %3==0){
        document.getElementById("res").innerHTML = "O número é divisivel por 3"
    }else{
        document.getElementById("res").innerHTML = "O número não é divisivel por 2 e por 3"
    }

}

function ex_6(){
    var n = window.prompt("Informe um numero");

    if (n %2==0){
        if(n %7==0){
            document.getElementById("res").innerHTML = "O número é divisivel por 2 e por 7"
        }else{
            document.getElementById("res").innerHTML = "O número é divisivel por 2"
        }
    }else if(n %7==0){
        document.getElementById("res").innerHTML = "O número é divisivel por 7"
    }else{
        document.getElementById("res").innerHTML = "O número não é divisivel por 2 e por 7"
    }

}

function ex_7(){
    var dia = window.prompt("Informe o número de um dia da semana");

    switch(dia){
        case '1':
            document.getElementById("dia").innerHTML="Domingo"
            break;
        case '2':
             document.getElementById("dia").innerHTML="Segunda-Feira"
             break;
         case '3':
            document.getElementById("dia").innerHTML="Terça-Feira"
            break;
        case '4':
            document.getElementById("dia").innerHTML="Quarta-Feira"
            break;
        case '5':
            document.getElementById("dia").innerHTML="Quinta-Feira"
            break;
        case '6':
            document.getElementById("dia").innerHTML="Sexta-Feira"
            break;
        case '7':
            document.getElementById("dia").innerHTML="Sábado"
            break;
        default:
            document.getElementById("dia").innerHTML="Esse dia não existe"
            break;                                      
    }
}

function ex_8(){
    var som=0;

    for(x = 0; x < 20; x++){
        if(x%2==0){
            parseInt(som+=x)
        }
    }
    document.getElementById("soma").innerHTML = som
}

function ex_9(){
    var multi = window.prompt("Digite um número")

    for(x=1; x <= 10; x++){
        document.getElementById("res"+x).innerHTML= `O resultado de ${multi} x ${x} é: ${parseInt(multi * x)} \n`
    }
}

function ex_10(){
    var fatorial = prompt("Digite um numero");
    var resultado = fatorial;

    for (var x = 1; x < fatorial; x++) {
        resultado *= x;
    }

    document.getElementById("res").innerHTML = resultado;
}
