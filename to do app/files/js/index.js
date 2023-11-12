var user = document.getElementById('usuario-texto--tarea');
var rBlurSeek = document.getElementById('rBlur');
//Tools:
var contenedores = document.getElementsByClassName("marcos-texto-tarea");
var parrafos = document.getElementsByClassName("volumenes-texto-tarea");
//Tools2:
var shapes = document.getElementsByClassName("container-shapes--task");
var inputCheck = document.getElementsByClassName("checkbox-task");
//Hide all Inputs
for(i=0;i != 6; i++){
    shapes[i].style.display="none";
}
//Tools 3:
var trashesIcon = document.getElementsByClassName('trashHom');
//Hide all trashIcon
for(i=0;i != 6; i++){
    trashesIcon[i].style.display="none";
}
//Mark homework:
inputCheck[0].addEventListener("click", () => {
    shorter(0);
})
inputCheck[1].addEventListener("click", () => {
    shorter(1);
})
inputCheck[2].addEventListener("click", () => {
    shorter(2);
})
inputCheck[3].addEventListener("click", () => {
    shorter(3);
})
inputCheck[4].addEventListener("click", () => {
    shorter(4);
})
inputCheck[5].addEventListener("click", () => {
    shorter(5);
})
//NewOne
trashesIcon[0].addEventListener("click", () => {
    disappearTask(0);
})
trashesIcon[1].addEventListener("click", () => {
    disappearTask(1);
})
trashesIcon[2].addEventListener("click", () => {
    disappearTask(2);
})
trashesIcon[3].addEventListener("click", () => {
    disappearTask(3);
})
trashesIcon[4].addEventListener("click", () => {
    disappearTask(4);
})
trashesIcon[5].addEventListener("click", () => {
    disappearTask(5);
    document.getElementById("creador-tareas").style.backgroundColor = "var(--coloring-g)";
    document.getElementById("boton-creador-tareas").style.color = "#000000";
})
function createTask(){
    usuarioTarea = user.value.toLowerCase().split("");
    for (i=1;i != 6;i++){
        if (contenedores[i-1].style.display == "flex" && contenedores[i].style.display == "none"){
            parrafos[i].innerHTML = usuarioTarea[0].toUpperCase()+usuarioTarea.slice(1).join("");
            contenedores[i].style.display="flex";
            shapes[i].style.display="block";
            trashesIcon[i].style.display = "inline-flex";
            break
        }
    }
}
function formEvent(){
    formulario_tarea.style.display='block';
}
function offFormEvent(){
    formulario_tarea.style.display='none';
}
function appearEffect(){
    rBlurSeek.style.display="block";
}
function disappearEffect(){
    rBlurSeek.style.display="none";
}
function initializer(){
    if(user.value == ""){
        alert('You need to put a homework');
    } else if(contenedores[0].style.display == "none") {
        contenedores[0].style.display="flex";
        shapes[0].style.display="block";
        trashesIcon[0].style.display = "inline-flex";
        usuarioTarea = user.value.toLowerCase().split("");
        parrafos[0].innerHTML = usuarioTarea[0].toUpperCase()+usuarioTarea.slice(1).join("");
    } else {
        createTask();
    }
}
function shorter(number){
    if(parrafos[number].style.textDecorationLine == '') {
        parrafos[number].style.textDecorationLine='line-through';
        parrafos[number].style.textDecorationThickness="0.10rem";
    } else {
        parrafos[number].style.textDecorationLine='';
    }
}
function disableButton(){
    if (contenedores[5].style.display == "flex"){
        document.getElementById("creador-tareas").style.backgroundColor = "#d3e8b7";
        document.getElementById("boton-creador-tareas").style.color = "#282525";
        warningMessage.style.visibility = "visible";
        warningMessage.style.backgroundColor= "var(--coloring-r)";
        paragraphMoment.style.fontSize= ".7rem";
        setTimeout(() => {
            warningMessage.style.backgroundColor= "transparent";
        },1500)
        setTimeout(() => {
            paragraphMoment.style.fontSize= "0";
        },1500)
        setTimeout(() => {
            warningMessage.style.visibility= "hidden";
        },3000)
    } else {
        formEvent();
        appearEffect();
    }
}
function disappearTask(number){
    parrafos[number].innerHTML="";
    for(i=0; i != 5; i++){
        if(parrafos[i].innerHTML==""){
            parrafos[i].innerHTML=parrafos[i+1].innerHTML;
            parrafos[i+1].innerHTML="";
        }
        if(inputCheck[i].checked == true){
            inputCheck[i].click();
        }
    }
    for(i=5; i >= 0; i--){
        if(parrafos[i].innerHTML==""){
            contenedores[i].style.display="none";
            shapes[i].style.display="none";
            trashesIcon[i].style.display="none";
            if(inputCheck[i].checked == true){
                inputCheck[i].click();
            }
        }
    }
}
//Prevent Enter
user.addEventListener('keydown', e => {
    if(e.key=="Enter"){
        e.preventDefault();
        initializer();
        offFormEvent();
        disappearEffect();
        user.value = "";
    }
})
//Warning function:
const warningMessage = document.getElementById("warning");
const paragraphMoment = document.getElementById("myPara");
warningMessage.style.visibility = "hidden";
//Efecto borroso:
const blurScreen = document.getElementById('rBlur');
disappearEffect();
//Esconder creador de tareas:
const formulario_tarea = document.getElementById('formulario-contenedor--tarea');
offFormEvent();
//Llamar formulario:
const boton_creador_tareas = document.getElementById('boton-creador-tareas');
boton_creador_tareas.addEventListener('click',disableButton);
//Input Deshacer:
const input_deshacer_tarea = document.getElementById('input-deshacer--tarea');
input_deshacer_tarea.addEventListener('click',offFormEvent);
input_deshacer_tarea.addEventListener('click',disappearEffect);
//Input:
const input_crear_tarea = document.getElementById('input-crear--tarea');
input_crear_tarea.addEventListener('click',offFormEvent);
input_crear_tarea.addEventListener('click',disappearEffect);
input_crear_tarea.addEventListener('click',initializer);
//Create Tasks:
const contenedor_marcos = document.getElementById("marco-tareas");
//First Task:
const contenedor_Uno = document.createElement("div");
    contenedor_Uno.setAttribute("id","marco-tarea-uno");
    contenedor_Uno.setAttribute("class","marcos-texto-tarea");
const parrafo_Uno = document.createElement("p");
    parrafo_Uno.setAttribute("class","volumenes-texto-tarea");
contenedor_Uno.appendChild(parrafo_Uno);
contenedor_marcos.appendChild(contenedor_Uno);
//Second Task:
const contenedor_Dos = document.createElement("div");
    contenedor_Dos.setAttribute("id","marco-tarea-dos");
    contenedor_Dos.setAttribute("class","marcos-texto-tarea");
const parrafo_Dos = document.createElement("p");
    parrafo_Dos.setAttribute("class","volumenes-texto-tarea");
contenedor_Dos.appendChild(parrafo_Dos);
contenedor_marcos.appendChild(contenedor_Dos);
//Third Task:
const contenedor_Tres = document.createElement("div");
    contenedor_Tres.setAttribute("id","marco-tarea-tres");
    contenedor_Tres.setAttribute("class","marcos-texto-tarea");
const parrafo_Tres = document.createElement("p");
    parrafo_Tres.setAttribute("class","volumenes-texto-tarea");
contenedor_Tres.appendChild(parrafo_Tres);
contenedor_marcos.appendChild(contenedor_Tres);
//Four Task:
const contenedor_Cuatro = document.createElement("div");
    contenedor_Cuatro.setAttribute("id","marco-tarea-cuatro");
    contenedor_Cuatro.setAttribute("class","marcos-texto-tarea");
const parrafo_Cuatro = document.createElement("p");
    parrafo_Cuatro.setAttribute("class","volumenes-texto-tarea");
contenedor_Cuatro.appendChild(parrafo_Cuatro);
contenedor_marcos.appendChild(contenedor_Cuatro);
//Five Task:
const contenedor_Cinco = document.createElement("div");
    contenedor_Cinco.setAttribute("id","marco-tarea-cinco");
    contenedor_Cinco.setAttribute("class","marcos-texto-tarea");
const parrafo_Cinco = document.createElement("p");
    parrafo_Cinco.setAttribute("class","volumenes-texto-tarea");
contenedor_Cinco.appendChild(parrafo_Cinco);
contenedor_marcos.appendChild(contenedor_Cinco);
//Six Task:
const contenedor_Seis = document.createElement("div");
    contenedor_Seis.setAttribute("id","marco-tarea-seis");
    contenedor_Seis.setAttribute("class","marcos-texto-tarea");
const parrafo_Seis = document.createElement("p");
    parrafo_Seis.setAttribute("class","volumenes-texto-tarea");
contenedor_Seis.appendChild(parrafo_Seis);
contenedor_marcos.appendChild(contenedor_Seis);
//Disappear all div's
for(i=0;i != 6;i++){
    contenedores[i].style.display="none";
}