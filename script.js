//Encapsular el codigo JS Dentro de Funcion que espera a que se cargue el HTML y CSS
function downloadJSAtOnload() {
  //Instancio elementos del dom
  const txtNombre=document.getElementById('txtNombre');
  const btnRegistrar=document.getElementById('btnRegistrar');
  const spnRespuesta=document.getElementById('spnRespuesta');
  //Asigno el foco al cuadro de texto
  txtNombre.focus();
  // oculto span de respuestas al cargar pagina
  spnRespuesta.style.display='none';
  // oculto span de respuesta si se hace foco en el input
  txtNombre.onfocus=()=>{
    spnRespuesta.style.display='none';
  }
  // Evento click al presionar boton
  btnRegistrar.addEventListener('click',()=>{
    // Muestro respuesta en el span
    spnRespuesta.textContent=`Bienvenido ${txtNombre.value}`;
    // Desoculto el span
    spnRespuesta.style.display='block';
    // Borro el cuadro de texto
    txtNombre.value='';
  })
}
if (window.addEventListener)
window.addEventListener('load', downloadJSAtOnload, false);
else if (window.attachEvent) window.attachEvent('onload', downloadJSAtOnload);
else window.onload = downloadJSAtOnload;