//contadores ejercicios
let contador = 1;
let contadorString = 1;
let contadorArray = 0;
let contadorLiteral = 1;
//Titulos Ejercicios Numeros
function NejecicioNumero(texto = "") {
  console.log("");
  console.log("");
  console.log(
    "----------------ejercicio Numero: " + contador++ + "----------------"
  );
  console.log(texto);
  console.log("");
}

//Titulos Ejercicios String
function NejecicioString(nombreEjercicio = "") {
  console.log("");
  console.log("");
  console.log(
    "               *****  ejercicio STR: " + contadorString++ + " **** "
  );
  console.log(nombreEjercicio);
  console.log("");
}
//Titulos Ejercicios array

function NejecicioArray(nombreEjercicio = "") {
  console.log("");
  console.log("");
  console.log(
    "               *****  ejercicio ARRAY: " + contadorArray++ + " **** "
  );
  console.log(nombreEjercicio);
  console.log("");
}

function NejecicioLiterales(nombreEjercicio = "") {
  console.log("");
  console.log("");
  console.log(
    "               *****  ejercicio Literal: " + contadorArray++ + " **** "
  );
  console.log(nombreEjercicio);
  console.log("");
}
//print
function print(
  a = "",
  b = "",
  c = "",
  d = "",
  e = "",
  f = "",
  g = "",
  h = "",
  i = "",
  j = "",
  k = ""
) {
  console.log(a + b + c + d + e + f + g + h + i + j + k);
}

//
//
// Ejercicios Numeros
//
//

// 1
NejecicioNumero("Dos números como argumentos y devuelva su suma");

const suma = (var1, var2) => var1 + var2;
print(suma(4, 6));

// 2
NejecicioNumero("Dos números como argumentos y devuelva su resta");

const resta = (var1, var2) => var1 - var2;
print("resta: " + resta(10, 2));

//3
NejecicioNumero("Dos números como argumentos y devuelva su producto");
const multiplicar = (var1, var2) => var1 * var2;
print("Multiplicar: " + multiplicar(50, 2));

//4
NejecicioNumero("Dos números como argumentos y devuelva su división");
const div = (var1, var2) => var1 / var2;
print("dividir " + div(50, 2));

//5
NejecicioNumero("Elevar el número base a la potencia dada");
const potencia = (var1, var2) => var1 ** var2;
print("potencia: " + potencia(10, 2));

//6
NejecicioNumero("Resto de la división del primer número entre el segundo");
const restoDiv = (var1, var2) => var1 % var2;
print("resto div: " + restoDiv(7, 3));

//7
NejecicioNumero("Un número como argumento y devuelva su raíz cuadrada");
const raizCuadrada = (numero) => Math.sqrt(numero);
print("Raiz cuadrada: " + raizCuadrada(220));

//8

NejecicioNumero("valor absoluto");
const absoluto = (var1) => Math.abs(var1);
print(absoluto(-6));

//9

NejecicioNumero("redondeado al entero más cercano");
const redondear = (var1) => Math.round(var1);
print(redondear(2.49999999999999999));

//10

NejecicioNumero("Aleatorio");
const aleatorio = () => Math.random(0, 1);
print(aleatorio());

//
//
// Ejercicios String
//
//

// 1

NejecicioString(
  "Dos cadenas de texto como argumentos y devuelva su concatenación"
);

const concatenado = (var1, var2) => {
  //print(var1 + var2);
  return var1 + " " + var2;
};

print(concatenado("Hello", "user"));
print(concatenado("Café", "con leche"));

//2

NejecicioString("Devuelva su longitud.");

const logitudString = (var1) => {
  let a = "";
  a + var1;
  return var1.length;
};

const palabra = "supercalifragilisticexpialicachopo";
print(
  "logitud de " + palabra + " son " + logitudString(palabra) + " caracteres."
);

// 3

NejecicioString("Misma cadena en mayúsculas");
{
  const mayusculas = (var1) => {
    let a = "";
    a = a + var1.toUpperCase();
    return a;
  };

  print(
    "La palabra " +
    palabra +
    " en Mayusculas es" +
    " * * * " +
    mayusculas(palabra) +
    " * * *"
  );
}

//4
NejecicioString("Misma cadena en minúsculas");

const Minuscula = (var1) => {
  let a = "";
  a = a + var1.toLowerCase();
  return a;
};

let palabraMayoscula = "PALABRA_MAYUSCULA";

print(
  "La palabra " +
  palabraMayoscula + // se convierte en mayusculas
  " en Minuscula es" +
  " * * * " +
  Minuscula(palabraMayoscula) +
  " * * *"
);

//5
NejecicioString(
  "Cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición"
);
{
  let CadenaLarga = "abcefghijklmnopqrstuvwxz";
  let caracterBuscar = "a";

  function caracterPosicion(cadena, buscar) {
    let posicionChar = -1;
    for (let i = 0; i <= cadena.length - 1; i++) {
      if (cadena[i].toLocaleLowerCase() === buscar.toLocaleLowerCase()) {
        posicionChar = i;
        break;
      }
    }

    if (posicionChar == -1) {
      print("No se ha encontrado la letra: " + buscar[0]);
    } else
      print(
        "Encontro el caracter:" +
        buscar[0] +
        " en la posicion: " +
        (posicionChar + 1)
      );
  }
  caracterPosicion(CadenaLarga, caracterBuscar);
}

//6

NejecicioString(
  "Cadena de texto como argumento y devuelva la misma cadena invertida"
);
{
  let CadenaInvertir = "abcefghijklmnopqrstuvwxz";

  function invertirCadena(cad) {
    let CadenaInvertida = "";

    for (let i = CadenaInvertir.length - 1; i >= 0; i--) {
      CadenaInvertida += CadenaInvertir[i];
    }
    return CadenaInvertida;
  }
  print(CadenaInvertir);
  print(invertirCadena(CadenaInvertir));
}

//7

NejecicioString(
  "Una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena"
);

{
  function contarCaracterEnCadena(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === caracter.toLowerCase()) {
        contador++;
      }
    }
    return contador;
  }
}

let cadena = "abcefghijklamnopqrstuvwxz";
let caracter = "a";
let veces = contarCaracterEnCadena(cadena, caracter);

print("Se ha encontrado la letra '" + caracter + "' " + veces + " veces.");

//8

NejecicioString("Cadena sin espacios en blanco");
{
  let espacios = "a b c d e f .";

  print(espacios);

  print(espacios.replaceAll(" ", ""));
}

//9
NejecicioString("palíndromo");
{
  function esPalindromo(cadena) {
    const limpia = cadena.replaceAll(" ", "").toLowerCase();
    const invertida = limpia.split("").reverse().join("");
    return limpia === invertida;
  }

  let frase = "Anita lava la tina";

  print("String entrada:   " + frase.replaceAll(" ", "").toLowerCase());
  print(
    "String invertida: " +
    frase.replaceAll(" ", "").toLowerCase().split("").reverse().join("")
  );

  if (esPalindromo(frase)) {
    print(frase + " ... SI, es un palíndromo.");
  } else {
    print(frase + " ... NO, no es un palíndromo.");
  }
}

//10

NejecicioString("Primera letra de cada palabra en mayúscula.");

function capitalizarPrimeraLetraDeCadaPalabra(cadena) {
  let resultado = "";
  let nuevaPalabra = true;

  for (let i = 0; i < cadena.length; i++) {
    const char = cadena[i];
    if (char === " ") {
      nuevaPalabra = true;
      resultado += " ";
    } else if (nuevaPalabra) {
      resultado += char.toUpperCase();
      nuevaPalabra = false;
    } else {
      resultado += char.toLowerCase();
    }
  }

  return resultado;
}

const cadenaOriginal =
  "UNA CADENA DE TEXTO COMO ARGUMENTO Y DEVUELVA LA MISMA CADENA CON LA PRIMERA LETRA DE CADA PALABRA EN MAYÚSCULA";

print("La frase:");
print(cadenaOriginal);
print();

let cadenaFormateada = capitalizarPrimeraLetraDeCadaPalabra(
  cadenaOriginal.toLowerCase()
);
print(cadenaFormateada);

//
//
// Ejercicios Numeros
//
//

//1
NejecicioArray(
  "Array de números como argumento y devuelva la suma de todos sus elementos."
);

function sumaArray(arr) {
  return arr.reduce((acumulador, actual) => acumulador + actual, 0);
}

print(sumaArray([1, 2, 3, 4, 5]));

//2

NejecicioArray(
  "Array de números como argumento y devuelva el promedio de todos sus elementos."
);

function promedio(arr) {
  const suma = arr.reduce(
    (acumulador, valorActual) => acumulador + valorActual
  );

  return suma / arr.length;
}

print(promedio([0, 10, 5, 2.5, 7.5]));

//3
NejecicioArray(
  "Array de números como argumento y devuelva el array ordenado de forma ascendente"
);

function ordenadoAscendente(arr) {
  return arr.sort().reverse();
}
arrayAscendente = [5, 3, 9, 4, 7, -2, 0];
print("sin ordenar " + arrayAscendente);
print("Ordenado:   " + ordenadoAscendente(arrayAscendente));

//4

NejecicioArray(
  "Array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado"
);

let arr1 = [1, 2, 3, 4, 5];
let numero999 = 999;

let juntarArrayYnumero = (array1, numero) => {
  array1.push(numero);
  return array1;
};

print(juntarArrayYnumero(...[arr1], numero999));

//5

NejecicioArray(
  "Dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays."
);
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, "#"];

const juntarArray = (array1, array2) => [...array1, ...array2];
const datosJuntados = juntarArray(arr1, arr2);

print("array 1: " + arr1);
print("array 2: " + arr2);
print("Datos juntos: " + datosJuntados);

//6

NejecicioArray(
  "Un array de números como argumento y devuelva el número máximo dentro del array."
);

ArrayNmax = [21, 878, 53, 24, 5, -5];
const numeroMax = (arr) => Math.max(...arr);

print(numeroMax(ArrayNmax));

//7

NejecicioArray(
  "Un array de números como argumento y devuelva el número mínimo dentro del array."
);

{
  ArrayNmin = [21, 878, 53, 24, 5, -5];
  const numeroMin = (arr) => Math.min(...arr);

  print(numeroMin(ArrayNmax));
}

//8

NejecicioArray(
  "Un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array."
);

{
  function contadorDeVeces(arr, aBuscar) {
    let contador = 0;
    for (i = 0; i < arr.length; i++) {
      if (aBuscar === arr[i]) contador++;
    }

    return contador;
  }

  const ArrayVeces = [21, 878, 21, 24, 5, -5, 21];
  const buscar = 21;
  print(
    "El numero de veces que sale: " +
    buscar +
    " es " +
    contadorDeVeces(ArrayVeces, buscar)
  );
}

// 9

NejecicioArray(
  "Un array como argumento y devuelva un nuevo array sin elementos duplicados"
);
{
  function sinDuplicar(arr) {
    return [...new Set(arr)];
  }

  const ArrayDuplicados = [21, 878, 21, 24, 5, -5, 21];

  print(ArrayDuplicados);
  print(sinDuplicar(ArrayDuplicados));
}

//10

NejecicioArray(
  "Un array como argumento y devuelva un nuevo array con los elementos en orden inverso."
);

const reverseArr = (arr) => arr.reverse();

const ArrReverse = [1, 3, 5, 7, 9, 2, 4, 6];
print("Normal:    " + ArrReverse);
print("Invertido: " + reverseArr(ArrReverse));

//
//
// Ejercicios literales
//
//

//1
const Personaje = {
  _nombre: "Paco",
  _edad: -1,

  getNombre() {
    return this._nombre;
  },
  getEdad() {
    return this._edad;
  },

  setEdad(age) {
    this._edad = age;
  },
  setNombre(name) {
    this._nombre = name;
  },
};

NejecicioLiterales(
  'Un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.'
);

const getNombre = (objeto = "") => objeto._nombre;
print("Con funciones: " + getNombre(Personaje));
print("Con clases:    " + Personaje.getNombre());

NejecicioLiterales(
  'Un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.'
);
const getEdad = (objeto) => objeto._edad;
const setEdad = (objeto, age) => objeto.setEdad(age);

print("Edad actual: " + getEdad(Personaje));

Personaje.setEdad(18);
setEdad(Personaje, 22);

print("Edad modificada: " + getEdad(Personaje));

NejecicioLiterales(
  "Un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null."
);
function agregarPropiedad(objeto, propiedad) {
  objeto[propiedad] = null;
}
agregarPropiedad(Personaje, "ciudad");
print("la propiedad ciudad contiene: " + Personaje.ciudad);

NejecicioLiterales(
  "Un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado."
);

function eliminarPropiedad(objeto, nombrePropiedad) {
  delete objeto[nombrePropiedad];
}
eliminarPropiedad(Personaje, "ciudad");
print("Eliminado,la propiedad ciudad es ahora: " + Personaje.ciudad); //da error por que no existe


NejecicioLiterales(
  "Un objeto literal como argumento y devuelva la cantidad de propiedades que tiene."
);
print("Personaje contiene " + Object.keys(Personaje).length + " propiedades");


NejecicioLiterales(
  "Un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene."
);

function ContienePropiedad(objeto, propiedad = "") {
  return propiedad in objeto;
}

print("contiene nombre: " + ContienePropiedad(Personaje, "_nombre"));
print("contiene edad:   " + ContienePropiedad(Personaje, "_edad"));
print("contiene Poder:  " + ContienePropiedad(Personaje, "_poder"));
print("contiene ciudad: " + ContienePropiedad(Personaje, "ciudad"));

NejecicioLiterales(
  "Un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades."
);

function obtenerValores(objeto) {
  return Object.values(objeto);
}

print(obtenerValores(Personaje));



NejecicioLiterales(
  "Dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes."
);

const objeto1 = {
  nombre: "Azucar",
  year: 1970
}

const objeto2 = {
  year: 1970,
  nombre: "Azucar",// invertido los propiedades
}
const objeto3 = {
  nombre: "mantequilla",
  year: 2024
}

function compararObjetos(obj1, obj2) {

  const claves1 = Object.keys(obj1);
  const claves2 = Object.keys(obj2);

  for (let clave of claves1) {
    if (!obj2.hasOwnProperty(clave)) return false;

    const val1 = obj1[clave];
    const val2 = obj2[clave];

    if (val1 !== val2) return false;
  }

  return true;
}

print("Objeto 1 y 2: " + compararObjetos(objeto1, objeto2));
print("Objeto 2 y 3: " + compararObjetos(objeto2, objeto3));


NejecicioLiterales(
  " un objeto literal como argumento y devuelva una copia exacta de ese objeto."
);

function clonar(ori) {
  return {
    ...ori
  }
    ;
};

const PersonajeOriginal = {
  nombre: "paco",
  edad: 22
}

const personajeClon = clonar(PersonajeOriginal);
print("es el mismo? PersonajeOriginal + PersonajeOriginal: " + (PersonajeOriginal === PersonajeOriginal));
print("es el mismo? PersonajeOriginal + personajeClon:     " + (PersonajeOriginal === personajeClon));


NejecicioLiterales(
  " dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer."
);


const a = {
  Dato1: "1 ",
  Dato2: "2 ",
  Dato3: "333 ",// se sobreescribe
};

const b = {
  Dato3: "3 ",
  Dato4: "4 ",
};

const fusionar = (AA, BB) => ({ ...AA, ...BB });

print(Object.entries(fusionar(a, b)));