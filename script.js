

const formulario = document.getElementById(`formulario`)
const resultado = document.getElementById(`resultado`)
const boton = document.getElementById(`btn`);
boton.addEventListener(`click`, calcular);
let datos = []
let fragment = document.createDocumentFragment();
resultado.classList.add(`w-100`,`mx-auto`)

function calcular () {
    let sexo = "";
    let peso = Number(document.getElementById(`peso`).value);
    let altura = Number(document.getElementById(`altura`).value);

    if(isNaN(peso)||peso==""|| isNaN(altura)||altura ==""){
        alert(`por favor ingresa información correcta`);
    }
    else if(altura<3){        
        let imc = peso / Math.pow(altura,2)
        msnResultado(imc);
    }else{ 
        let convertir = altura/100; 
        let imc = peso / Math.pow(convertir,2)
        msnResultado(imc);
        
    }

    mostrarDatos();
}

const msnResultado = (imc)=>{
    if(imc<18){
        let respuesta = "Su IMC es de "+ imc.toFixed(1) +" se encuentra por debajo del peso saludable";
        informacion(respuesta);
    }else if(imc>=18 && imc<25){
        let respuesta = "Su IMC es de "+ imc.toFixed(1) +" se encuentra saludable";
        informacion(respuesta);
    }else if(imc>=25 && imc<30){
        let respuesta = "Su IMC es de "+ imc.toFixed(1) +" se encuentra por encima del peso saludable";
        informacion(respuesta);
    }else if(imc>=30 && imc<40){
        let respuesta = "Su IMC es de "+ imc.toFixed(1) +" se encuentra en obesidad";
        informacion(respuesta);
    }else if(imc>=40){
        let respuesta= "Su IMC es de "+ imc.toFixed(1) +" Tu peso se encuentra en un nivel exagerado, por favor busca ayuda";
        informacion(respuesta);
    }
}

const informacion = (respuesta)=>{
    datos.push(respuesta)
    localStorage.setItem(`Registro respuestas`, JSON.stringify(datos))
}

const mostrarDatos = ()=>{
    let arreglo = JSON.parse(localStorage.getItem(`Registro respuestas`))
    resultado.innerHTML=``;
    arreglo.forEach(element => {
        resultado.innerHTML +=`
        <p class="p-1 border border-dark  rounded fs-6 fw-light text-center w-75 mx-auto">${element}</p>
        `
    });
}