let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        console.log(classList,'esta es mi classlist')
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[6].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



function downloadFile() {
    // URL del archivo a descargar
    var url = "file:///C:/Users/moyi/Desktop/CV/CV%202023.pdf";
    
    // Crea un elemento <a> para descargar el archivo
    var link = document.createElement('a');
    link.href = url;
    
    // Asigna el nombre del archivo
    link.download = "CV.pdf";
    
    // Agrega el elemento <a> al DOM
    document.body.appendChild(link);
    
    // Simula el clic en el enlace para descargar el archivo
    link.click();
    
    // Elimina el elemento <a> del DOM
    document.body.removeChild(link);
  }

// Escucha el evento click del botón enviar
document.getElementById('boton-enviar').addEventListener('click', function(event) {

  event.preventDefault();

  // Establecer las propiedades de templateParams utilizando los valores de los elementos de formulario
  var templateParams = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
    mensaje: document.getElementById('mensaje').value
  };

  // enviar el correo electrónico utilizando EmailJS
  emailjs.send('service_vy61ici', 'template_xdqmw0t', templateParams, 'C9ARAVqTbrjMr1kPs')
    .then(function(response) {
      console.log('Correo electrónico enviado correctamente', response);
      alert('Tu mensaje ha sido enviado correctamente. ¡Gracias por contactarnos!');
    }, function(error) {
      console.log('Error al enviar el correo electrónico', error);
      alert('Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    });

  // reiniciar el formulario
  document.getElementById('formulario-contacto').reset();
});











  