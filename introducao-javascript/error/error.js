//Função que recebe um array e um número

function validaArrays(arr, num) {
	
    try {

        //Erro de Reference Error caso os parÂmetros não tenham sido enviados
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

        //Caso o array não seja do tipo object
		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

        //Caso o array não seja do tipo numero
		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

        //Caso o tamanho do array for diferente do número enviado como parâmetro
		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        //Caso o array seja válido
		return arr;
	} catch (e) {
        //Caso dê erro, chama instruções diferentes dependendo do erro através do instanceof

		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.message);

		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.message);

		} else {
			console.log('Outro tipo de erro!');
			console.log(e.message);
		}
	}
}

//Primeiro caso: vazio
console.log(validaArrays())

//Não ser do tipo object
console.log(validaArrays(5, 5))

//Do tipo array
console.log(validaArrays([], "a"))

console.log(validaArrays([1, 2, 3, 4, 5], 5));