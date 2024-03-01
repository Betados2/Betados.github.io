document.addEventListener('DOMContentLoaded', function () {
  
    var pantalla = document.querySelector('.resultado');
    var botonesNumeros = document.querySelectorAll('.numeros');
    var botonesOperadores = document.querySelectorAll('.operadores');
    var botonIgual = document.querySelector('.igual');
    var botonCE = document.querySelector('.eliminar_todo');

 
    botonesNumeros.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
                pantalla.textContent = boton.textContent;
            } else {
                pantalla.textContent += boton.textContent;
            }
        });
    });

    
    botonesOperadores.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (pantalla.textContent !== 'Error') {
                pantalla.textContent += boton.textContent;
            }
        });
    });

    
    botonCE.addEventListener('click', function () {
        pantalla.textContent = '0';
    });

 
    botonIgual.addEventListener('click', function () {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
            pantalla.textContent = 'Error';
        }
    });
});
