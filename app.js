/*let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){//recibe parametros en este caso elemento, texto
    let elementoHTML = document.querySelector(elemento); //document.selector- Enlazar js con html
    elementoHTML.innerHTML = texto;//agregar valor o texto a la variable titulo en html
    return;
}
function verificarIntento(){ //function declarar funcion para html
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//GetId selecciona etiqueta por ID
   
   /*console.log(numeroUsuario === numeroSecreto);//===validacion en valor y tipo de dato*/
   /* if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')//removeatrribute quitar atributo a elementos en HTML
    }else{
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generaNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //Si ya sorteamos los nummeros
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //Si numerogenerado esta en la lista
    if(numerosSorteados.includes(numeroGenerado)){
        return generaNumSecreto();
    } else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    }
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');//Llamar la funcion y asignar valor a los parametros antes declarado
    asignarTextoElemento('p', `indica un numero del 1 a ${numeroMaximo}`);
    numeroSecreto = generaNumSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar msj de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intento
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');//setattribute envia un valor con verdadero o falso
}

condicionesIniciales();*/
//var formato =  /0-9/
//var formato =  "[A-Z]"
function encriptar(){
    var formato =  "[A-ZÑñÁáÉéÍíÓóÚú0-9]"
    var texto = document.querySelector("#inputTexto").value;
   if(document.querySelector("#inputTexto").value==""){
        alert('No ingresaste texto')
        } else{if (texto.match(formato)==null){
        var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        
    //document.querySelector(".text-input-salida").value = textoEncriptado;
    //document.querySelector("#inputTexto").value;
    console.log(textoEncriptado);
    limpiarTexto()
      } else{
   alert('No puedes usar mayusculas, letras con caracteres especiales o números');
    
    }
    }
    limpiarTexto()
}

function desencriptar(){
    var formato =  "[A-ZÑñÁáÉéÍíÓóÚú0-9]"
    var texto = document.querySelector("#inputTexto").value;
    if(document.querySelector("#inputTexto").value==""){
        alert('No ingresaste texto')
        }else{
    if (texto.match(formato)==null){
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    console.log(textoEncriptado);
    }else{
        alert('No puedes usar mayusculas o letras con acentos o caracteres especiales');
    }
}
limpiarTexto()
}

function limpiarTexto(){
    document.querySelector("#inputTexto").value=""
}