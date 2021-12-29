const inputAdultos = document.querySelector("#adultos");
const inputCriancas = document.querySelector("#criancas");
const inputDuracao = document.querySelector("#duracao");

const resultado = document.querySelector("#resultado");

function carnePP(duracao) {
  
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao) {
  
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  const totalCerveja = cervejaPP(duracao) * adultos;
  const totalRefrigerante = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML += `
      <div class="result-block">
      <i class="icon-carne"></i>
        <p>${totalCarne/1000} Kg de Carne</p>
      </div>
    `
    resultado.innerHTML += `
      <div class="result-block">
      <i class="icon-cerveja"></i>
        <p>${Math.ceil(totalCerveja/355)} latas de Cerveja</p>
      </div>
    `
    resultado.innerHTML += `
      <div class="result-block">
      <i class="icon-refri"></i>
        <p>${Math.ceil(totalRefrigerante/2000)} Pet's 2l de Bebidas</p>
      </div>
     
    `
}
