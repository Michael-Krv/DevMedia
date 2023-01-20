//Requisitos:

//O usuário da aplicação deve informar o valor da dívida e o número de dias que ela se encontra em atraso.
//O valor da dívida deve ser maior que zero, caso contrário, a aplicação deve informar ao usuário do problema e encerrar
//O número de dias nos ajuda a determinar a taxa de juros.
//Dívidas com mais de 15 dias de atraso tem uma taxa de 10% de juros aplicada sobre o valor da dívida, já as dívidas com menos de 15 dias de atraso tem uma taxa de apenas 5% de juros sobre o valor da dívida.
//Os juros só devem ser aplicados, se houver ao menos um dia de atraso, do contrário, o usuário é considerado "em dia" e a aplicação deve ser encerrada com uma mensagem de aviso.


import rl from 'readline-sync';

while (true) {
	
	console.log('Aplicação de Juros: \n');

	let valorDevido = Number(rl.question('Informe o valor devido: R$ '));
	if(valorDevido <= 0){
		console.log('O valor da dívida deve ser maior que zero!');
		break;
	}

	let diasAtraso = Number(rl.question('Informe quantos dias se passaram desde o vencimento do boleto: '));
	if(diasAtraso <= 0){
		console.log('Você está em dia!');
		break;
	}

	let taxaJuros;
	let valorTotal;
	let divida = {
		valor: valorDevido,
		atraso: diasAtraso
	};
	
	valorTotal = (diasAtraso > 15) ? calcularJuros(divida.valor, divida.atraso, 10) : calcularJuros(divida.valor, divida.atraso, 5);
	resumo();
	break;
	
	function calcularJuros(valorDaDivida, diasDeAtraso, taxaDeJuros){
		taxaJuros = taxaDeJuros;
		return valorDaDivida + (valorDaDivida * (taxaDeJuros / 100));
	}

	function resumo (){
		console.log('\nValor original da dívida: R$ ' + divida.valor);
		console.log('Dias atrasados: '+ divida.atraso);
		console.log('Taxa de juros: ' + taxaJuros + '%')
		console.log('Valor total com juros: R$ ' + valorTotal.toFixed(2));
	}
}


