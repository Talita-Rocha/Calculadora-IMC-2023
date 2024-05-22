//selecionando os elementos
var peso = document.querySelector('#peso');
var altura = document.querySelector('#altura');
var btnCalc = document.querySelector('#btn-calc');
var areaCalc = document.querySelector('#area-calc');
var areaResult = document.querySelector('#area-result');

var resultImc = document.querySelector('#result-imc');
var resultClassificacao = document.querySelector('#result-classificacao');

var btnRefazer = document.querySelector('#btn-refazer');

function calcularImc(){
    if(peso.value != '' && altura.value != ''){
        var imc = peso.value / (altura.value*altura.value);
        // alert('Seu IMC é: '+imc.toFixed(2));

        areaCalc.classList.add('d-none');
        areaResult.classList.remove('d-none');
        
        resultImc.innerHTML = imc.toFixed(2);

        if(imc < 18.5){
            resultClassificacao.innerHTML = 'Magreza';
            resultClassificacao.style.color = '#FF3D00';
            resultImc.style.color = '#FF3D00';
        }

        else if(imc >= 18.50 && imc <= 24.99){
            resultClassificacao.innerHTML = 'Normal';
            resultClassificacao.style.color = '#00FF1A';
            resultImc.style.color = '#00FF1A';
        }

        else if(imc >= 25.00 && imc <=29.99){
            resultClassificacao.innerHTML = 'Sobrepeso';
            resultClassificacao.style.color = '#FFF500';
            resultImc.style.color = '#FFF500';
        }

        else if(imc >= 30.00 && imc <=39.99){
            resultClassificacao.innerHTML = 'Obesidade';
            resultClassificacao.style.color = '#FF3D00';
            resultImc.style.color = '#FF3D00';
        }

        else{
            resultClassificacao.innerHTML = 'Obesidade grave';
            resultClassificacao.style.color = '#950000';
            resultImc.style.color = '#950000';
        }
    }

    else{
        alert('Preencha todos os campos')
    }

}

btnCalc.addEventListener('click', calcularImc)

//"e" são detalhes do evento executado
altura.addEventListener('keyup', function(e){
    //console.log(e);
  
    //se a tecla digitado for o "Enter", chama a função
    if(e.key == 'Enter'){
      calcularImc();
    }
  
  })

function refazerTeste(){
    
    areaResult.classList.add('d-none');
    areaCalc.classList.remove('d-none');
    peso.value = '';
    altura.value = '';
}

btnRefazer.addEventListener('click', refazerTeste)