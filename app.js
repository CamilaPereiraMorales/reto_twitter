// Creo const para llamar al boton
const boton = document.getElementById("button");
//accion a realizar cuando hagan click
boton.addEventListener("click",()=> {
//Creo una variable para guardar el texto ingresado    
    let comentario = document.getElementById("formulario").value;
//limpio la caja de texto
    document.getElementById("formulario").value = "";
//llamo a elemento padre de HTML
    const fraseTwiteada = document.getElementById("fraseTwiteada");
//creo un elemento en JS
    const newTexto = document.createElement("div");
//creo un elemento    
    const dondeVaElTexto = document.createElement("p");
//le indico el tipo de elemento que es    
    dondeVaElTexto.type = "text"
//le digo que es un texto    
    let textoNuevo = document.createTextNode(comentario);
//llamo al elemento padre
    dondeVaElTexto.appendChild(textoNuevo);
})