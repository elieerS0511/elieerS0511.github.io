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
        //body += "Teléfono: " + telefono + "\n";//
        //body += "Correo: " + correo + "\n";//
        body += mensaje;

        var mailtoLink = "mailto:elieergutierrez32@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        
        // WhatsApp
        var whatsappPhoneNumber = "+584262505504"; // número proporcionado por el usuario
        var whatsappMessage = "Nuevo mensaje de contacto:\n";
        whatsappMessage += "Nombre: " + nombre + "\n";
        //whatsappMessage += "Teléfono: " + telefono + "\n"; // El usuario puede o no incluir su propio número aquí si lo desea//
        //whatsappMessage += "Correo: " + correo + "\n";//
        whatsappMessage += mensaje;
        var whatsappLink = "https://wa.me/" + whatsappPhoneNumber + "?text=" + encodeURIComponent(whatsappMessage);

        // Intentar abrir ambos
        let emailOpened = false;
        try {
            window.open(mailtoLink, '_self'); // Usar _self para intentar evitar problemas de bloqueo de pop-ups en algunos navegadores
            emailOpened = true;
        } catch (e) {
            console.error("Error al intentar abrir mailto link:", e);
            alert("No se pudo abrir el cliente de correo. Por favor, copia la información manualmente o intenta de nuevo.");
        }

        // Pequeña demora para WhatsApp para no sobrecargar al navegador con dos redirecciones inmediatas
        // y dar tiempo a que el mailto se procese.
        setTimeout(function() {
            try {
                window.open(whatsappLink, '_blank'); // Abrir WhatsApp en una nueva pestaña/app
            } catch (e) {
                console.error("Error al intentar abrir WhatsApp link:", e);
                alert("No se pudo abrir WhatsApp. Asegúrate de tenerlo instalado o permite pop-ups para este sitio.");
            }
        }, 500);


        // Limpiar formulario
        document.getElementById("contactName").value = "";
        document.getElementById("contactPhone").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactMessage").value = "";

        if(emailOpened){
            alert("Serás redirigido a tu cliente de correo y se intentará abrir WhatsApp. ¡Gracias por contactarme!");
        } else {
            alert("Se intentará abrir WhatsApp. Si el cliente de correo no se abrió, por favor verifica la configuración de tu navegador. ¡Gracias por contactarme!");
        }
    }

    // Event listener para el boton de enviar mensaje
    var botonEnviar = document.getElementById("sendMessageBtn");
    if(botonEnviar){
        botonEnviar.addEventListener("click", enviarMensaje);
    } else {
        // Este console.error podría no ser visible si el script se carga antes de que el botón exista,
        // pero lo dejamos por si acaso o para futuras depuraciones si el script se mueve de nuevo.
        console.error("El botón con ID 'sendMessageBtn' no fue encontrado. Asegúrate de que el script se carga después del HTML del botón.");
    }