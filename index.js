var dataAtual = '2022/07/20';
var dataEvento = '2022/05/19';
let idadeEvento = 17;
let listaEvento = ["Participante", "Palestrante", "Palestrante", "Participante","Participante"];
qtd = listaEvento.length;


//verificação data
if (dataEvento > dataAtual) {
    console.log(`Data Atual: ${dataAtual} Data Evento: ${dataEvento} - Evento permitido!`);
}
else {
    console.log(`Data Atual: ${dataAtual} Data Evento: ${dataEvento} - Cadastro não permitido evento, data inválida!`);
}

//verificação idade
if (idadeEvento >= 18) {
    console.log(`Idade: ${idadeEvento} - Idade permitida!`);
}
else {
    console.log(`Idade: ${idadeEvento} - Cadastro não permitido por causa da idade!`);
}

//listar participante e palestrante
for( let i = 0; i < qtd; i++ ){
    let evnt = listaEvento[i];
    if( evnt.length < 12 ){
      console.log("Palestrante");
    } else {
      console.log("Participante");
    }
  }
 
//verificação qtd participante
while(qtd < 100){
    console.log("Permitir cadastro!");
    return 0;
}
console.log("Cadastro não permitido por ter excedido o limite!");