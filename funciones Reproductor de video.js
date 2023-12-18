//FUNCIÓN 1 JAVASCRIPT

document.addEventListener("DOMContentLoaded", function (){
    let reproductorDeVideo = document.querySelector("video");

    reproductorDeVideo.addEventListener("play", function (){
        console.log("Reproduciendo Video");
    });

    reproductorDeVideo.addEventListener("pause", function (){
        console.log("Video en pausa");
    });

    reproductorDeVideo.addEventListener("ended", function (){
        alert("¡El video ha terminado!");
    });
});
//La anterior función reproduce un mensaje en la consola cuando el video se reproduce o se pausa, además reproduce un
//mensaje para el visitante de la página cuando el video ha terminado.