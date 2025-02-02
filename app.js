// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo(){
    let nombreIngresado= document.getElementById('amigo').value;
    if (nombreIngresado==""){
        alert('Porfavor inserte un nombre');
    }else{
        amigos.push(nombreIngresado);
        console.log(amigos);
        let tamanoAmigos=amigos.length;
        //Limpia la caja        
        document.querySelector('#amigo').value='';
        actualizarAmigos(amigos,tamanoAmigos);
    }
}
function actualizarAmigos(amigos,tamanoAmigos){
    let listAmigos=document.querySelector('#listaAmigos');
    var newli=document.createElement("li");    
    newli.innerHTML=amigos[tamanoAmigos-1];
    listAmigos.appendChild(newli);  
}
function sortearAmigo(){
    let tamanoAmigo=amigos.length;
    if(tamanoAmigo>0){
        let num=Math.floor(Math.random()*tamanoAmigo);
        console.log(num);
        let nomEnPantalla=document.querySelector('#resultado');
        nomEnPantalla.innerHTML=`El amigo secreto es: ${amigos[num]}`;
    }else{
        alert('Ingrese nombres para realizar el sorteo');
    }
}