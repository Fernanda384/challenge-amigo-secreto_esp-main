// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo(){
    let nombreIngresado= document.getElementById('amigo').value;
    if (nombreIngresado==""){
        alert('Porfavor inserte un nombre');
    }
    // Agrega datos a la lista.
    if (nombreIngresado!=''){
        amigos.push(nombreIngresado);
    }
    console.log(amigos);
    //Limpia la caja
    document.querySelector('#amigo').value='';
    actualizarAmigos(amigos,nombreIngresado);
}
function actualizarAmigos(amigos, nombreIngresado){
    let listAmigos=document.querySelector('#listaAmigos');
    var newli=document.createElement("li");
    newli.innerHTML=amigos[amigos.length-1];
    listAmigos.appendChild(newli);  
}
function sortearAmigo(){

}