function tocaSom (seletorAudio){
    const element = document.querySelector(seletorAudio);

    if(element && element.localName === 'audio'){
        element.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(var i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
