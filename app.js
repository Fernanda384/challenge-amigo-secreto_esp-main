// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo(){
    nombreIngresado= document.getElementById('amigo');
    if (nombreIngresado==""){
        alert('Porfavor inserte un nombre');
        agregarAmigo();
    }
    amigos.push(nombreIngresado);
    document.getElementById('amigo')
}
function sortearAmigo(){

}