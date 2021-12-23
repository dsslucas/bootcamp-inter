//URL Básica. Quase um backend
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

//Botão que modifica a imagem do miau
const btn = document.getElementById('change-cat');

//Imagem do miau
const catImg = document.getElementById('cat')

//Função assíncrona
const getCats = async () => {

	//Também é possível fazer com then catch. No caso, fiz por Try Catch
	try {
        //Dados vindos da BASE_URL
		const data = await fetch(BASE_URL);

        //Pega a string que vai ser recebida e converte para JSON
		const json = await data.json();

        //Saída
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

//Mais uma função assíncrona
const loadImg = async () => {
	//const img = document.getElementsByTagName('img')[0];

	//Sempre que quiser carregar a imagem, damos um await
	catImg.src = await getCats();
};



//Listener do botão, reconhece o evento
btn.addEventListener('click', loadImg);

//Chama a função
loadImg();