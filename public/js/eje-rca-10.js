//Archivo JavaScript para la calculadora
function sumaNumeros(){
    //Declaracion (let--variables y const--constantes)
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
    const suma = n1 + n2;
    //Salida
    resultado.innerHTML='Resultado: ' +suma
    //alert("Resultado suma: " +suma); ----- //alert('Aqui se van a sumar los dos numeros');
}

function restaNumeros(){
    //Declaracion (let--variables y const--constantes)
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
    const resta = n1 - n2;
    //Salida
    resultado.innerHTML='Resultado: ' +resta
    //alert('Aqui se van a restar los dos numeros');
}

function multiplicaNumeros(){
    //Declaracion (let--variables y const--constantes)
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
    const multiplicacion = n1 * n2;
    //Salida
    resultado.innerHTML='Resultado: ' +multiplicacion
    //alert('Aqui se van a multiplicar los dos numeros');
}

function divideNumeros(){
    //Declaracion (let--variables y const--constantes)
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
    const division = n1 / n2;
    //Salida
    resultado.innerHTML='Resultado: ' +division
    //alert('Aqui se van a dividir los dos numeros');
}