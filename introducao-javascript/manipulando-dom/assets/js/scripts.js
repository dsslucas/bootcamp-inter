const botao = document.getElementById('mode-selector');

const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//Classe para mudança na opção do clique
const darkMode = "dark-mode";

//No botão
botao.addEventListener("click", mudarDarkMode)

function mudarDarkMode(){
    //Altera tudo para Dark Mode

    botao.classList.toggle(darkMode)
    h1.classList.toggle(darkMode)
    body.classList.toggle(darkMode)
    footer.classList.toggle(darkMode)

    //Alterações de texto caso esteja em Dark Mode
    if(body.classList.contains(darkMode)){
        h1.innerHTML = "Dark Mode ON"
        botao.innerHTML = "Light Mode"
    }
    //Caso contrário
    else{
        h1.innerHTML = "Light Mode ON"
        botao.innerHTML = "Dark Mode"
    }
}