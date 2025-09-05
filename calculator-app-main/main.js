let numeros = document.getElementsByClassName('button');
let screen = document.getElementsByClassName('calculator-display')[0];

// Recorremos los botones y les añadimos un evento 
Array.from(numeros).forEach(boton => {
    boton.addEventListener('click', () => {
        let valor = boton.textContent;
        
        if (valor === 'RESET') {
            screen.value = '';
        }else if (valor === '=') {
            try {
                screen.value = eval(screen.value.replace(/x/g, '*'));
            } catch {
                screen.value = 'Error';
            }   
        }else if (valor === 'DEL') {
            screen.value = screen.value.slice(0, -1);
        }else {
            screen.value += valor;
        }
    });
});

// Seleccionamos los inputs del switch
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');

//Cada elemento
const body = document.body;
const sl = document.querySelector('span');
const switch3 = document.querySelector('.switch-3');
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.button');
const resetButton = document.querySelector('.reset');
const equalButton = document.querySelector('.equal');
const delButton = document.querySelector('.del');
const bgButtons = document.querySelectorAll('.calculator-buttons');

document.addEventListener('DOMContentLoaded', () => {
    cambiarTema('base');
});

// Función para cambiar tema
function cambiarTema(tema) {
  // Quitamos cualquier clase de tema anterior
  body.classList.remove('base', 'light', 'lile');
  sl.classList.remove('base', 'light', 'lile');
  switch3.classList.remove('base', 'light', 'lile');
  slider.classList.remove('base', 'light', 'lile');
  screen.classList.remove('base', 'light', 'lile');
  buttons.forEach(boton => boton.classList.remove('base', 'light', 'lile'));
  resetButton.classList.remove('base', 'light', 'lile');
  equalButton.classList.remove('base', 'light', 'lile');
  delButton.classList.remove('base', 'light', 'lile');
  bgButtons.forEach(boton => boton.classList.remove('base', 'light', 'lile'));

  // Agregamos la nueva clase
  body.classList.add(tema);
  sl.classList.add(tema);
  switch3.classList.add(tema);
  slider.classList.add(tema);
  screen.classList.add(tema);
  buttons.forEach(boton => boton.classList.add(tema));
  resetButton.classList.add(tema);
  equalButton.classList.add(tema);
  delButton.classList.add(tema);
  bgButtons.forEach(boton => boton.classList.add(tema));
}

// Eventos para cada opción
opt1.addEventListener('change', () => { if(opt1.checked) cambiarTema('base'); });
opt2.addEventListener('change', () => { if(opt2.checked) cambiarTema('light'); });
opt3.addEventListener('change', () => { if(opt3.checked) cambiarTema('lile'); });


