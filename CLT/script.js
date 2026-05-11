let valorAtual = 0;

function trocarPagina(id){

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function abrirCalculadora(nome, valor){

  valorAtual = valor;

  document.getElementById('tituloCalc').innerText =
  `Calculadora ${nome}`;

  document.getElementById('valorHora').value = valor;

  trocarPagina('calculadora');
}

/* CALCULAR */

document.getElementById('form').addEventListener('submit', function(e){

  e.preventDefault();

  const empresa =
  document.getElementById('empresa').value;

  const servico =
  document.getElementById('servico').value;

  const horas =
  Number(document.getElementById('horas').value);

  const valorHora =
  Number(document.getElementById('valorHora').value);

  const imposto =
  Number(document.getElementById('imposto').value);

  const desconto =
  Number(document.getElementById('desconto').value);

  const urgencia =
  Number(document.getElementById('urgencia').value);

  let total =
  horas * valorHora;

  total =
  total * (1 + imposto / 100);

  total =
  total * (1 - desconto / 100);

  total =
  total * (1 + urgencia / 100);

  const resultado =
  document.getElementById('resultado');

  resultado.innerHTML =
  `Total: R$ ${total.toFixed(2)}`;

  if(total < 100){

    resultado.className = 'baixo';

    resultado.innerHTML +=
    '<br>⚠️ Valor muito baixo';

  }else{

    resultado.className = 'ok';
  }

  adicionarProjeto(
    empresa,
    servico,
    total.toFixed(2)
  );

  document.getElementById('form').reset();
});

/* ADICIONAR PROJETO */

function adicionarProjeto(empresa, servico, valor){

  const li = document.createElement('li');

  li.innerHTML = `
    <strong>Empresa:</strong> ${empresa}<br>
    <strong>Serviço:</strong> ${servico}<br>
    <strong>Valor:</strong> R$ ${valor}

    <div class="projetoBtns">

      <button onclick="moverProjeto(this,'listaAndamento')">
        Em andamento
      </button>

      <button onclick="apagarProjeto(this)">
        Apagar
      </button>

    </div>
  `;

  document
  .getElementById('listaProjetos')
  .appendChild(li);
}

/* MOVER PROJETOS */

function moverProjeto(btn, destino){

  const item = btn.parentElement.parentElement;

  if(destino === 'listaAndamento'){

    item.querySelector('.projetoBtns').innerHTML = `

      <button onclick="moverProjeto(this,'listaFinalizados')">
        Finalizar
      </button>

      <button onclick="apagarProjeto(this)">
        Apagar
      </button>
    `;
  }

  if(destino === 'listaFinalizados'){

    item.querySelector('.projetoBtns').innerHTML = `

      <button onclick="apagarProjeto(this)">
        Apagar
      </button>
    `;
  }

  document
  .getElementById(destino)
  .appendChild(item);
}

/* APAGAR */

function apagarProjeto(btn){

  btn.parentElement.parentElement.remove();
}