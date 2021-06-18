//1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function questao1(text)
{return "olá" + text + "!";

}
//2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), 
//mostre no console a soma, subtração, multiplicação ou divisão desses valores, dependendo da função Callabck.
function questao2(valor1 , valor2 , Callabck)
{console.log(callback(valor1,valor2))

}
questao2(4,2,function(A,B)
{return A + B;
})

//3 – Crie uma função que recebe um valor e uma callback como parâmetro, que retorna uma outra função que recebe um parâmetro e 
//chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro 
//numero passado pela função interna e retorne true ou false.
function questao3 (valor1, callback)
{return function(valor2)
{
    callback(valor1,valor2);
}
}
var funcInterna = questao3(15,function(val1,val2)
{if( valor1 %valor2 == 0){
console.log('true')
}
else
{console.log('false')
}
})

funcInterna(3);
function Meses(num)

//4 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
//Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
function Meses(num){
switch (Meses)
 {
    case (num==1):
      console.log('Janeiro');
      break;
    case (num==2):
      console.log('Fevereiro');
      break;
    case (num==3):
      console.log('Março');
      break;
      case (num==4):
       console.log('Abril');
     break;
     case (num==5):
       console.log('Maio');
    break;
    case (num==6):
      console.log('Junho');
    break;
    case (num==7):
      console.log('JUlho');
     break;
    case (num==8):
      console.log('Agosto');
      break;
     case (num==9):
      console.log('Setembro');
      break;
    case (num==10):
       console.log('Outubro');
     break;
    case (num==11):
       console.log('Novembro');
     break;
    case (num==12):
       console.log('Dezembro');
      break;
      default:
  }
}
Meses(12);

//5 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função
function numeros(num1,num2, callback)
{ 
  return callback(num1,num2)
}

numeros(7,7, function(valor1,valor2){
  if (valor1 > valor2) {
    console.log("O primeiro número é maior")
  }
  if (valor1 < valor2) {
    console.log("O primeiro número é menor")
  }
  else{
    console.log("Os números são iguais")
  }
})
