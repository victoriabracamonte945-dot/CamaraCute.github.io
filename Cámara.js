//Empezaremos declarando variables y poniendo el coso para que el programa los reconozca
const video = document.getElementById("Video");
const boton = document.getElementById("SayCheese");
const filtro = document.getElementById("Filtro");
const canvas = document.getElementById("Canvas");
const preview = document.getElementById("Preview");

// 1) Encender cámara
async function ActivarCámara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (e) {
        alert("No se pudo acceder a la cámara :( ");
    }
}

//EXPLICACIÓN DE LA WEA DE ARRIBA 
/*
1) async significa que la función va a realizar algo que demora. Esto permite usar await más adelante.
2) try y catch. try → Intentamos ejecutar un código que podría fallar. catch → Si falla, hacemos algo (mostrar un mensaje, manejar error).
3) Await es para que espere. stream es un objeto que contiene el video en vivo.
*/

ActivarCámara(); //Llamamos a la función

// FUNCIONAAAAAAA, ESTÁ FUNCIONANDO. 

// 2) Tomar foto
boton.addEventListener("click", () => {
    const width = video.videoWidth; //video.videoWidth obtiene el ancho real del video de tu cámara.
    const height = video.videoHeight; //Lo mismo, pero con la altura real del video.

//Para poder poner la foto ahí, el canvas debe tener exactamente el mismo tamaño que el video. Estas dos líneas ajustan su tamaño.
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
/*ctx es un objeto el cual proporciona todas las herramientas, métodos y propiedades necesarias para dibujar y manipular gráficos en dos dimensiones dentro de un elemento
 getContext("2d") significa que vas a dibujar en DOS dimensiones (ancho y alto), como una image
*/

// Dibujar la imagen actual del video sobre el canvas
ctx.drawImage(video, 0, 0, width, height);

 // Aplicar filtros muy simples
    const selected = filtro.value;

});
