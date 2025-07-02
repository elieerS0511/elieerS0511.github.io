let menuVisible=false;
//Función que muestra u oculta el menú
function mostrarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function selecionar(){
    //oculto una vez que se selecciona una opción
    document.getElementById("nav").classList="";
    menuVisible=false;}

    //funcion animacion skills
    function efectoHabilidades(){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades= document.getElementsByClassName("progreso");
            habilidades[0].classList.add("html");
            habilidades[1].classList.add("office");
            habilidades[2].classList.add("linux");
            habilidades[3].classList.add("windows");
            habilidades[4].classList.add("mantenimiento");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("inteligencia");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("creatividad");
        }
    }
    
    //detectar scroll para aplicar las animaciones
    window.onscroll = function(){
        efectoHabilidades();
    }

    //funcion para enviar formulario de contacto
    function enviarMensaje(){
        let nombre = document.getElementById("contactName").value;
        let telefono = document.getElementById("contactPhone").value;
        let correo = document.getElementById("contactEmail").value;
        let mensaje = document.getElementById("contactMessage").value;

        // Validacion basica
        if(nombre === "" || telefono === "" || correo === "" || mensaje === ""){
            alert("Por favor, rellena todos los campos del formulario.");
            return;
        }

        // Validacion de correo electronico simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(correo)){
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }

        var subject = "Nuevo mensaje de contacto de " + nombre;
        var body = "Nombre: " + nombre + "\n";
        body += "Teléfono: " + telefono + "\n";
        body += "Correo: " + correo + "\n";
        body += "Mensaje: " + mensaje;

        var mailtoLink = "mailto:elieergutierrez32@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;

        // Limpiar formulario (opcional, ya que la pagina cambiara al cliente de correo)
        document.getElementById("contactName").value = "";
        document.getElementById("contactPhone").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactMessage").value = "";

        alert("Serás redirigido a tu cliente de correo para enviar el mensaje. ¡Gracias por contactarme!");
    }

    // Event listener para el boton de enviar mensaje
    // Asegurarse de que el DOM este completamente cargado antes de añadir el event listener
    document.addEventListener('DOMContentLoaded', function() {
        var botonEnviar = document.getElementById("sendMessageBtn");
        if(botonEnviar){
            botonEnviar.addEventListener("click", enviarMensaje);
        } else {
            console.error("El botón con ID 'sendMessageBtn' no fue encontrado.");
        }
    });