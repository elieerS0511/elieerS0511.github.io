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