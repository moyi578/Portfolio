let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
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
  
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
    const telefono = document.getElementById("telefono").value;
  
    // Crear objeto de correo electrónico
    const email = {
      to: [{email: "francomoyi578@gmail.com"}],
      from: {email: correo},
      subject: "Mensaje de contacto desde mi sitio web",
      textContent: mensaje,
      replyTo: {email: correo},
      params: {
        NOMBRE: nombre,
        TELEFONO: telefono
      }
    };
  
    // Enviar correo electrónico utilizando la API de Sendinblue
    fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        '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': sendinblueConfig.apiKey
      },
      body: JSON.stringify(email)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar el correo electrónico');
      }
      return response.json();
    })
    .then(data => {
      alert('Mensaje enviado correctamente');
    })
    .catch(error => {
      alert(error.message);
    });
  });
   