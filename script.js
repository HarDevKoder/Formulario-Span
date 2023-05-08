//Encapsular el codigo JS Dentro de Funcion que espera a que se cargue el HTML y CSS
function downloadJSAtOnload() {
  //Instancio elementos del dom
  const txtNombre=document.getElementById('txtNombre'); //caja de texto
  const btnRegistrar=document.getElementById('btnRegistrar'); //boton de Registro
  const cuadroResultado=document.getElementById('cuadroResultado');
  // oculto span de respuestas al cargar pagina
  cuadroResultado.style.display='none';
  // oculto span de respuesta si se hace foco en el input
  txtNombre.onfocus=()=>{
    cuadroResultado.style.display='none';
  }

  window.addEventListener('keydown',(e)=>{
    if(e.keyCode===13){
      btnRegistrar.click();
    }
  })

  // Evento click al presionar boton
  btnRegistrar.addEventListener('click',()=>{
    if(txtNombre.value==''){
      cuadroResultado.textContent=`Introduce Datos !`;
      // Desoculto el span
      cuadroResultado.style.display='block';
      // Coloco Fondo Rojo al cuadro de respuesta
      cuadroResultado.style.backgroundColor='red';
      // Borro el cuadro de texto
      txtNombre.value='';
    }else{
      // Muestro respuesta en el span
      cuadroResultado.textContent=`Hola ${txtNombre.value}`;
      // Desoculto el span
      cuadroResultado.style.display='block';
      // Coloco Fondo Rojo al cuadro de respuesta
      cuadroResultado.style.backgroundColor='green';
      // Borro el cuadro de texto
      txtNombre.value='';
    }
  })
}
if (window.addEventListener)
window.addEventListener('load', downloadJSAtOnload, false);
else if (window.attachEvent) window.attachEvent('onload', downloadJSAtOnload);
else window.onload = downloadJSAtOnload;