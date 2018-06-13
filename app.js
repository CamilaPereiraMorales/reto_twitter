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
//creo una variable que me diga que comentario es un texto
    let textoNuevo = document.createTextNode(comentario);
//llamo al elemento padre
    dondeVaElTexto.appendChild(textoNuevo);//p es hijo de comentario
    newTexto.appendChild(dondeVaElTexto);//div es hijo de p
    fraseTwiteada.appendChild(newTexto);//frase twiteada es hijo de div
})