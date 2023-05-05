

//IMPORTANTE: Tomar todo el código tal como está y comentarlo antes de empezar 
        //para que no salten los 400 prompts.
//Ir descomentando cada ejercicio es más eficiente
//En ejercicio 7 las versiones v.1, v.2, v.3, v.4 no funcionan, 
        //en la v.5 me resultó gracias a la guía de Fede(estaba muriendo)


//ejercicio 1

function esMayor(num1, num2) {
    if (num1 > num2){
        console.log(`El número ${num1} es mayor que ${num2}`)
    }else{
        console.log(`El número ${num1} no es mayor que ${num2}`)
    }
}
esMayor(2, 5);

//ejercicio 2

function sonIguales(num1, num2) {
    if (num1 === num2){
        console.log(`El número ${num1} es igual que ${num2}`)
    }else{
        console.log(`El número ${num1} es diferente que ${num2}`)
    }
}
sonIguales(5, 5);

//ejercicio 3

function masGrande(num1, num2) {
    if (num1 > num2){
        console.log(`${num1} es más grande que ${num2}`)
    }if (num1 < num2) {
        console.log(`${num2} es más grande que ${num1}`)
    }if (num1 === num2) {
        console.log(`${num1} es igual que ${num2}`)
    }
}
masGrande(4, 4);

//ejercicio 4

function masChico(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(`${num1} es el más pequeño de los tres números`)
    }if (num2 < num1 && num2 < num3) {
        console.log(`${num2} es el más pequeño de los tres números`)
    }if (num3 < num1 && num3 < num2) {
        console.log(`${num3} es el más pequeño de los tres números`)
    }
}
masChico(10, 3, 11);

//ejercicio 5

const personas = {
    persona1: {
        name: `Natalia`,
        edad: 37,
        altura: 170
    },
    persona2: {
        name: `Marcela`,
        edad: 38,
        altura: 155
    }
}

function masAlta(alt1, alt2) {
    if (alt1 > alt2) {
        console.log (`${personas.persona1.name} es más alta que ${personas.persona2.name}`)
    }if (alt2 > alt1) {
        console.log (`${personas.persona2.name} es más alta que ${personas.persona1.name}`)
    }if (alt1 === alt2) {
        console.log (`${personas.persona1.name} mide lo mismo que ${personas.persona2.name}`)
    }
}

masAlta(personas.persona1.altura, personas.persona2.altura)

function masEdad(edad1, edad2) {
    if (edad1 > edad2) {
        console.log (`${personas.persona1.name} es mayor que ${personas.persona2.name}`)
    }if (edad2 > edad1) {
        console.log (`${personas.persona2.name} es más mayor que ${personas.persona1.name}`)
    }if (edad1 === edad2) {
        console.log (`${personas.persona1.name} tiene la misma edad que ${personas.persona2.name}`)
    }
}

masEdad(personas.persona1.edad, personas.persona2.edad)

// ejercicio 6

let nombre = prompt(`Ingresa tu nombre:`);
let edad = Number(prompt(`Ingresa tu edad:`));
let altura = Number(prompt(`Ingresa tu altura en cm: ejemplo: 167`));
let vision = Number(prompt(`Ingresa tu vision del 1 al 10, siendo 10 la mejor:`));

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(`${nombre} está habilitado para conducir`);
}else {console.log(`${nombre} no está habilitado para conducir`)};

//ejercicio 7

// v.1

// function ingreso(nom, pase, entrada, saldo) {
//     let nom = prompt(`Ingresa tu nombre:`);
//     let pase = prompt(`Ingresa el tipo de tu pase, Vip o Normal:`);
//     let entrada = prompt(`Tienes entrada? ingresa si o no:`);
//     if (nom == 'Marco' || nom == `MARCO` || nom == `marco`) {
//         console.log(`${nom}, bienvenido a nuestro local`);
//     }else if (pase == `VIP` || pase == `Vip` || pase == `vip`) {
//         console.log(`${nom}, bienvenido a nuestro local`);
//     }else if (entrada == `SI` || entrada == `Si` || entrada == `si`) {
//         let utilizarEntrada = prompt(`Desea utilizar entrada?:`);
//     }else if (utilizarEntrada == `SI` || utilizarEntrada == `Si` || utilizarEntrada == `si`){
//         console.log(`${nom}, bienvenido a nuestro local`);
//     }else if (utilizarEntrada == `NO` || utilizarEntrada == `No` || utilizarEntrada == `no`){
//         console.log(`${nom}, gracias por venir, esperamos tu regreso!`);
//     }else if (nom != 'Marco' && pase != `VIP` || pase != `Vip` || pase != `vip` && entrada != `SI`|| entrada != `Si` || entrada != `si`) {
//         let saldo = Number(prompt(`Ingresa tu saldo disponible:`));
//     }else if (saldo >= 1000) {
//         console.log(`${nom}, bienvenido a nuestro local`);
//     }else{
//         console.log(`${nom}, gracias por venir, esperamos tu regreso!`);
//     }
// }
// ingreso();

// v.2

// function ingreso(nombre, pase, entrada, utilizarEntrada, saldo) {
//     if (nombre == 'Marco' || nombre == `MARCO` || nombre == `marco`) {
//         console.log(`${nombre}, bienvenido a nuestro local`);
//     }else if (pase == `VIP` || pase == `Vip` || pase == `vip`) {
//         console.log(`${nombre}, bienvenido a nuestro local`);
//     }else if (entrada == `SI` || entrada == `Si` || entrada == `si`){
//         let utilizarEntrada = prompt(`Desea utilizar entrada?:`);
//     }else if (utilizarEntrada == `SI` || utilizarEntrada == `Si` || utilizarEntrada == `si`){
//         console.log(`${nombre}, bienvenido a nuestro local`);
//     }else if (utilizarEntrada == `NO` || utilizarEntrada == `No` || utilizarEntrada == `no`){
//         console.log(`${nombre}, gracias por venir, esperamos tu regreso!`);
//     }else if (nombre != 'Marco' || nombre != `MARCO` || nombre != marco && pase != `VIP` || pase != `Vip` || pase != `vip` && entrada != `SI`|| entrada != `Si` || entrada != `si`) {
//         let saldo = Number(prompt(`Ingresa tu saldo disponible:`));
//     }else if (saldo >= 1000) {
//         console.log(`${nombre}, bienvenido a nuestro local`);
//     }else{
//         console.log(`${nombre}, gracias por venir, esperamos tu regreso!`);
//     }
// }
// ingreso(`javier`, `normal`, `si`, 1500);

// v.3

// let nom = prompt(`Ingresa tu nombre:`);
// let pase = prompt(`Ingresa el tipo de tu pase, Vip o Normal:`);
// let entrada = prompt(`Posees entrada?: Escribe Si o No:`);

// if (nom == `Marco` || nom == `MARCO` || nom == `marco`) {
//     alert(`${nom}, bienvenido a nuestro local`);
// }if (entrada == `SI` || entrada == `Si` || entrada == `si`) {
//     let respuestaEntrada = prompt(`Deseas usar tu entrada? Escribe Si o No:`)
// }if (respuestaEntrada == `SI` || respuestaEntrada == `Si` || respuestaEntrada == `si`){
//     alert(`${nom}, bienvenido a nuestro local`);
// }if (nombre != 'Marco' || nombre != `MARCO` || nombre != marco && pase != `VIP` || pase != `Vip` || pase != `vip` && entrada != `SI`|| entrada != `Si` || entrada != `si`){
//     let deseaComprar = prompt(`Desea comprar entrada? Escribe Si o No:`);
// }if (deseaComprar == `NO` || deseaComprar == `No` || deseaComprar == `no`){
//     alert(`${nom}, gracias por venir!`)
// }if (deseaComprar == `SI` || deseaComprar == `Si` || deseaComprar == `si`){
//     let saldo = prompt(`Ingresa tu dinero, valor 1000:`);
// }if (saldo > 1000){
//     alert(`${nom}, bienvenido a nuestro local`);
// }if (saldo == 1000){
//     alert(`${nom}, gracias por comprar tu entrada!`);
// }if (saldo != 1000){
//     alert(`${nom}, monto incorrecto, gracias por venir`);
// }else{
//     alert(`${nom}, gracias por venir!`);
// }

// v.4 Switch (Con esta me sale)

// let nom = prompt(`Ingrese su nombre:`);
// let pase = prompt(`${nom}, ingresa el tipo de tu pase: Escribe Vip o Normal:`);
// let entrada = prompt(`${nom}, Posees una entrada? Escribe Si o No`);

// switch (nom.toLowerCase()) {
//     case `marco`:
//         alert(`${nom}, Bienvenido a nuestra tienda!`);
//         break;
//     default:
//         break;
// }
// switch (pase.toLowerCase()) {
//     case `vip`:
//         alert(`${nom}, Bienvenido a nuestra tienda!`);
//         break;
//     default:
//         break;
// }

// v.5 (EN ESTA SI QUE SI xD)

let nom = prompt(`Ingresa tu nombre:`);
let pase = prompt(`${nom}, Ingresa el tipo de pase que posees: Escribe Vip o Normal:`);
let entrada = prompt(`${nom}, tienes entrada? Escribe Si o No:`)

console.log(nom.toLowerCase())

if (nom.toLowerCase() == `marco`){
    alert(`${nom}, bienvenido a nuestra tienda`);
}else if (pase.toLowerCase() == `vip`){
    alert(`${nom}, bienvenido a nuestra tienda`);
}else if (entrada.toLowerCase() == `si`){
    let usaEntrada = prompt(`${nom}, deseas usar tu entrada? Escribe Si o No?`)
    if (usaEntrada.toLowerCase() == `si`) {
        alert(`${nom}, bienvenido a nuestra tienda`);
    }else if (usaEntrada.toLowerCase() == `no`){
        alert(`${nom}, gracias por venir, vuelve pronto!`);
    }
}else if (entrada.toLowerCase() == `no`){
    let compraEntrada = prompt(`${nom}, deseas comprar tu entrada? Escribe Si o No`)
    if (compraEntrada.toLowerCase() == `si`) {
        let saldo = Number(prompt(`${nom}, ingresa el monto requerido: 1000`))
        if (saldo == 1000){
            alert(`${nom}, gracias por comprar tu entrada, bienvenido a nuestra tienda`);
        }else if (saldo != 1000){
            alert(`Monto incorrecto, gracias por venir!`);
        }
    }else if(compraEntrada.toLowerCase() == `no`){
        alert(`${nom}, gracias por venir, vuelve pronto!`);
    }
}

// ejercicio 8

alert(`Adivina el número incógnito del 1 al 10! Tienes 3 intentos`);
let numeroIncongnita = 5;
let primerNum = Number(prompt(`Primer intento: ingresa un número:`));
if (primerNum == numeroIncongnita) {
    alert(`Felicidades! Haz encontrado el número correcto!`);
}else if (primerNum != numeroIncongnita){
    alert(`Incorrecto! Prueba otra vez!`);
    if (primerNum < numeroIncongnita) {
        alert(`El número incógnito es mayor`);
    }else if(primerNum > numeroIncongnita){
        alert(`El número incógnito es menor`);
    }
    let segundoNum = Number(prompt(`Segundo intento: ingresa un número:`));
    if (segundoNum == numeroIncongnita) {
        alert(`Felicidades! Haz encontrado el número correcto!`);
    }else if (segundoNum != numeroIncongnita) {
        alert(`Incorrecto! último intento! prueba otra vez!`);
        if (segundoNum < numeroIncongnita) {
            alert(`El número incógnito es mayor`);
        }else if(segundoNum > numeroIncongnita){
            alert(`El número incógnito es menor`);
        }
        let tercerNum = Number(prompt(`Tercer intento: ingresa un número:`));
        if (tercerNum == numeroIncongnita) {
            alert(`Felicidades! Haz encontrado el número correcto!`);
        }else if (tercerNum != numeroIncongnita){
            alert(`Incorrecto! Lo siento, haz perdido`);
        }
    }
}

// ejercicio 9

let edadd = Number(prompt(`Ingresa tu edad:`));

if (edadd >= 0 && edadd <= 12) {
    console.log(`Eres un infante!`)
}else if(edadd >=13 && edadd <= 18){
    console.log(`Eres un adolescente!`)
}else if (edadd >= 19 && edadd <= 45) {
    console.log(`Eres un mayor jóven!`)
}else if (edadd >= 46 && edadd <= 100) {
    console.log(`Eres un anciano!`)
}else if (edadd > 100){
    console.log(`De verdad tienes esa edad!?`)
}

// ejercicio 10

let concursoPPT = alert(`Compite en piedra, papel o tijera!`)
let primerJug = prompt(`Jugador 1 ingresa tu Nombre:`)
let segundoJug = prompt(`Jugador 2 ingresa tu Nombre:`)

let jugadaPrimerJug = prompt(`${primerJug} ingresa PIEDRA, PAPEL o TIJERA:`)
let jugadaSegundoJug = prompt(`${segundoJug} ingresa PIEDRA, PAPEL o TIJERA:`)

if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `piedra`) {
    alert(`Dos PIEDRAS: Empate!`)
}else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `papel`) {
    alert(`${segundoJug} ha ganado!`)
}else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `tijera`) {
    alert(`${primerJug} ha ganado!`)
}else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `papel`) {
    alert(`Doble PAPEL: Empate!`)
}else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `piedra`) {
    alert(`${primerJug} ha ganado!`)
}else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `tijera`) {
    alert(`${segundoJug} ha ganado!`)
}else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `tijera`) {
    alert(`Doble Tijera: Empate!`)
}else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `piedra`) {
    alert(`${segundoJug} ha ganado!`)
}else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `papel`) {
    alert(`${primerJug} ha ganado!`)
}else {
    alert(`Un jugador ha hecho trampa! Fin del Juego!`)
};

// ejercicio 11

let color = prompt(`Ingresa un color:`)
switch (color) {
    case `Blanco`.toLowerCase():
        alert(`Falta de color`)
        break;
    case `Negro`.toLowerCase():
        alert(`Falta de color`)
        break;
    case `Verde`.toLowerCase():
        alert(`El color de la naturaleza`)
        break;
    case `Azul`.toLowerCase():
        alert(`El color del agua`)
        break;
    case `Amarillo`.toLowerCase():
        alert(`El color del sol`)
        break;
    case `Rojo`.toLowerCase():
        alert(`El color del fuego`)
        break;
    case `Marrón`.toLowerCase():
        alert(`El color de la tierra`)
        break;
    default: 
        alert(`Excelente elección, no lo teníamos pensado.`)
        break;
}

// ejercicio 12 Que grande Nico que hizo este ejercicio en un workshop xD

let operacion = prompt( "Ingrese operacion: suma, resta, multiplicacion, division" )
let numeroUno = Number( prompt( 'Ingrese el primer numero' ) )
let numeroDos = Number( prompt( 'Ingrese el segundo numero' ) )


switch ( operacion ) {
    case "suma":
        console.log( `El resultado de sumar ${numeroUno} y ${numeroDos} es ${numeroUno + numeroDos}` )
        break;
    case "resta":
        console.log( `El resultado de restar ${numeroUno} y ${numeroDos} es ${numeroUno - numeroDos}` )
        break;
    case "multiplicacion":
        console.log( `El resultado de multiplicar ${numeroUno} y ${numeroDos} es ${numeroUno * numeroDos}` )
        break;
    case "division":
        console.log( `El resultado de dividir ${numeroUno} y ${numeroDos} es ${numeroUno / numeroDos}` )
        break;
    default:
        console.log('operacion no valida')
        break
}

// ejercicio 13

let namee = prompt(`Ingresa tu nombre:`)
let apellid = prompt(`Ingresa tu apellido:`)
let birthday = prompt(`Ingresa tu fecha de nacimiento:`)
let dniNum = prompt(`Ingresa tu número de DNI:`)
let sexo = prompt(`Ingresa tu sexo:`)
alert(`Revisa tu datos: ${namee} - ${apellid} - ${birthday} - ${dniNum} - ${sexo}`)

let confirma = prompt(`Son los datos correctos?: Escribe Si o No:`)

if (confirma.toLowerCase `si`) {
    const dataDni = {
        nombre: `${namee}`,
        apellido: `${apellid}`,
        nacimiento: `${birthday}`,
        dni: `${dniNum}`,
        sexo: `${sexo}`
        }
        console.table(dataDni);
        alert(`Datos ingresados correctamente`)
}else{
    alert(`Datos incorrectos, vuelva en un mes`)
}