/*colores*/
const colorBtns = document.querySelectorAll('.color-btn');
const resetBtn = document.getElementById('reset');

for (let i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener('click', () => {
    const cssvar = colorBtns[i].getAttribute('data-color');
    document.documentElement.style.setProperty('--color-body', asignarColor(cssvar, 'body'));
    document.documentElement.style.setProperty('--color-heading', asignarColor(cssvar, 'heading'));
    document.documentElement.style.setProperty('--color-base', asignarColor(cssvar, 'base'));
    document.documentElement.style.setProperty('--color-base2', asignarColor(cssvar, 'base2'));
    document.documentElement.style.setProperty('--color-brand', asignarColor(cssvar, 'brand'));
    document.documentElement.style.setProperty('--color-brand2', asignarColor(cssvar, 'brand2'));
  });
}

//Botón "Reset"
resetBtn.addEventListener('click', () => {
  document.documentElement.style.removeProperty('--color-body');
  document.documentElement.style.removeProperty('--color-heading');
  document.documentElement.style.removeProperty('--color-base');
  document.documentElement.style.removeProperty('--color-base2');
  document.documentElement.style.removeProperty('--color-brand');
  document.documentElement.style.removeProperty('--color-brand2');
});

// siwtch de colores 
function asignarColor(cssvar, variable) {
  switch (cssvar) {
    case 'morado':
      switch (variable) {
        case 'body':
          return '#f3eef7';
        case 'heading':
          return '#757575';
        case 'base':
          return '#9b59b6';
        case 'base2':
          return '#4c2a73';
        case 'brand':
          return '#f5b041';
        case 'brand2':
          return '#f7dc6f';
      }
      break;
    case 'verde':
      switch (variable) {
        case 'body':
          return '#e6f7f1';
        case 'heading':
          return '#2e3131';
        case 'base':
          return '#44c28e';
        case 'base2':
          return '#3c4f3d';
        case 'brand':
          return '#fcbf49';
        case 'brand2':
          return '#f28f3b';
      }
      break;
    case 'rojo':
      switch (variable) {
        case 'body':
          return '#fff7f0';
        case 'heading':
          return '#dbd4c5';
        case 'base':
          return '#9e2a2b';
        case 'base2':
          return '#6f1d1f';
        case 'brand':
          return '#cde6f5';
        case 'brand2':
          return '#96bbce';
      }
      break;
    default:
      return '';
  }
}
/*colores*/
/*Selector has*/
const select = document.getElementById('modulo');
const container = document.querySelector('#filtrar');
const cards = document.querySelectorAll('[data-categoria]');

console.log(select);
console.log(container);
console.log(cards);

select.addEventListener('change', () => {
    const valorSelect = select.value;
    cards.forEach((card) => {
      const categorias = card.dataset.categoria.split(' ');
      if (valorSelect === 'all' || categorias.includes(valorSelect)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
/*Selector has*/
/*Input*/
const asunto = document.querySelector('#subject');
const cc = document.querySelector('#cc');
const cuerpo = document.querySelector('#body');

console.log(asunto);
console.log(cc);
console.log(cuerpo);

asunto.addEventListener('blur', validarAsunto);
cc.addEventListener('blur', validarCC);
cuerpo.addEventListener('blur', validarCuerpo);

function validarAsunto() {
    const valor = asunto.value;
    if(valor === ""){
        asunto.classList.add("no-valido");
        asunto.classList.remove("valido");
        const error = document.querySelector('#asunto-error');
        error.style.display = 'block';
    }else{
        asunto.classList.add("valido");
        asunto.classList.remove("no-valido");
        const error = document.querySelector('#asunto-error');
        error.style.display = 'none';
    }
}

function validarCC() {
    const valor = cc.value;
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === "" || !email.test(valor)) {
      cc.classList.add("no-valido");
      cc.classList.remove("valido");
      const error = document.querySelector("#cc-error");
      error.style.display = "block";
    } else {
      cc.classList.add("valido");
      cc.classList.remove("no-valido");
      const error = document.querySelector("#cc-error");
      error.style.display = "none";
    }
  }
  


function validarCuerpo() {
    const valor = cuerpo.value;
    if(valor === ""){
        cuerpo.classList.add("no-valido");
        cuerpo.classList.remove("valido");
        const error = document.querySelector('#cuerpo-error');
        error.style.display = 'block';
    }else{
        cuerpo.classList.add("valido");
        cuerpo.classList.remove("no-valido");
        const error = document.querySelector('#cuerpo-error');
        error.style.display = 'none';
    }

}
/*Input*/