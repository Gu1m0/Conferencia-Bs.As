let pepe=["caca","tomate","perro"]
const btnBorrar = document.getElementById("btn-Borrar");
const formulario = document.querySelector("form");
btnBorrar.addEventListener("click", (e) => {
  formulario.reset();
  resultado.innerHTML = `Total a Pagar: $`;
});


const validationCustom04 = document.getElementById("validationCustom04");
function filtro() {
  let regex = /\d/g;
  var tecla = event.key;
  if (!regex.test(tecla) || validationCustom04.value.length >= 3)
    event.preventDefault();
}

const btnResumen = document.getElementById("btn-Resumen");
const selectValue = document.getElementById("validationCustom05");
const resultado = document.getElementById("resultado");

const precios = {
  Estudiante: 200 - (200 * .8),
  Trainee: 200 - (200 * .5),
  Junior: 200 - (200 * .15),
};

formulario.addEventListener("submit", (e) => {
  const cantidad = parseInt(validationCustom04.value);
  let precio = selectValue.value;
  let totalAPagarSinDto = parseInt(cantidad) * 200;
  let totalAPagar = parseInt(cantidad) * precios[precio];
  e.preventDefault();
  resultado.innerHTML = `Total a Pagar: <s>$${totalAPagarSinDto}</s><b>&nbsp;$${totalAPagar}<i> *c/Dscto.</i></b>`;
});
